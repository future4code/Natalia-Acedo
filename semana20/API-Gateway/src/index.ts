import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { IdGenerator } from "./service/IdGenerator";
import { HashManager } from "./service/HashManager";
import { UserCookenuDatabase } from "./data/UserCookenuDatabase";
import { Authenticator } from "./service/Authenticator";
import { BaseDatabase } from "./data/BaseDatabase";
import { RecipeDatabase } from "./data/RecipeDatabase";
import { Followers } from "./data/FollowersDatabase";
import { RefreshTokenDatabase } from "./data/RefreshTokenDatabase";


const app = express();
app.use(cors({
  origin: true
}))

app.use(express.json());

export default app;


if(process.env.NODE_ENV !== "serverless") {
  dotenv.config();
  const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });

}


app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
      device: req.body.device,
    };

    const id = new IdGenerator().generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password);

    const userDatabase = new UserCookenuDatabase();
    await userDatabase.createUser(
      id,
      userData.email,
      userData.name,
      hashPassword,
      userData.role,
      userData.device
    );

    const authenticator = new Authenticator();

    const accessToken = authenticator.generateToken(
      { id, role: userData.role },
      "2min"
    );

    const refreshToken = authenticator.generateToken(
      { id, device: userData.device },
      process.env.REFRESH_TOKEN_EXPIRES_IN
    );

    const refreshTokenDatabase = new RefreshTokenDatabase();
    await refreshTokenDatabase.createRefreshToken(
      refreshToken,
      userData.device,
      true,
      id
    );

    res.status(200).send({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.post("/refresh/token", async (req: Request, res: Response) => {
  try {
    const refreshToken = req.body.refreshToken;
    const device = req.body.device;

    const authenticator = new Authenticator();
    const refreshTokenData = authenticator.getData(refreshToken);

    if (refreshTokenData.device !== device) {
      throw new Error("Different devices");
    }

    const userDatabase = new UserCookenuDatabase();
    const user = await userDatabase.getUserById(refreshTokenData.id);

    const accessToken = authenticator.generateToken(
      { id: user.id, role: user.role },
      "2min"
    );

    res.status(200).send({ accessToken });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDatabase.destroyConnection();
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
      device: req.body.device,
    };

    const userDatabase = new UserCookenuDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const compareResult = hashManager.compare(userData.password, user.password);

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken(
      { id: user.id, role: user.role },
      "2min"
    );

    const refreshToken = authenticator.generateToken(
      { id: user.id, device: userData.device },
      process.env.REFRESH_TOKEN_EXPIRES_IN
    );

    const refreshTokenDatabase = new RefreshTokenDatabase();
    const retrievedTokenFromDatabase = await refreshTokenDatabase.getRefreshTokenByIdAndDevice(
      user.id,
      userData.device
    );

    if (retrievedTokenFromDatabase) {
      await refreshTokenDatabase.deleteRefreshToken(
        retrievedTokenFromDatabase.token
      );
    }

    await refreshTokenDatabase.createRefreshToken(
      refreshToken,
      userData.device,
      true,
      user.id
    );

    res.status(200).send({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userDatabase = new UserCookenuDatabase();
    const user = await userDatabase.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.post("/recipe", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;
    const id = new IdGenerator().generate();
    const date = new Date();

    const recipeData = {
      title: req.body.title,
      description: req.body.description,
    };

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const recipe = new RecipeDatabase();
    await recipe.createRecipe(
      id,
      recipeData.title,
      recipeData.description,
      date,
      authenticationData.id
    );

    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.get("/recipe/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const id = req.params.id;

    const recipeDatabase = new RecipeDatabase();
    const recipe = await recipeDatabase.getRecipeById(id);

    res.status(200).send({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      cratedAt: recipe.date,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.post("/user/follow", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userToFollowId = req.body.userToFollowId;

    if (!userToFollowId || userToFollowId === "") {
      throw new Error("User not found");
    }

    const followersDatabase = new Followers();
    await followersDatabase.createFollower(
      authenticationData.id,
      userToFollowId
    );

    res.status(200).send({
      message: "Followed successfully",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.post("/user/unfollow", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userToUnfollowId = req.body.userToFollowId;

    if (!userToUnfollowId || userToUnfollowId === "") {
      throw new Error("User not found");
    }

    const followersDatabase = new Followers();
    await followersDatabase.unfollow(authenticationData.id, userToUnfollowId);

    res.status(200).send({
      message: "Unfollowed successfully",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.get("/user/feed", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const followersDatabase = new Followers();

    const feed = await followersDatabase.getFeed(authenticationData.id);

    res.status(200).send({
      feed,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const id = req.params.id;

    const userDatabase = new UserCookenuDatabase();
    const user = await userDatabase.getUserById(id);

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

app.get("/recipe/edit/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const idRecipe = req.params.id;
    const recipeData = {
      title: req.body.title,
      description: req.body.description,
    };

    const recipeDatabase = new RecipeDatabase();
    const recipe = await recipeDatabase.getRecipeById(idRecipe);

    if (authenticationData.id !== recipe.user_id) {
      throw new Error("Invalid user");
    }

    await recipeDatabase.editRecipe(
      idRecipe,
      recipeData.title,
      recipeData.description
    );

    res.status(200).send({
      message: "Your recipe has been successfully edited",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDatabase.destroyConnection();
});

app.delete("/recipe/delete/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.token as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const idRecipe = req.params.id;

    const recipeDatabase = new RecipeDatabase();
    const recipe = await recipeDatabase.getRecipeById(idRecipe);

    if (authenticationData.id !== recipe.user_id) {
      throw new Error("Invalid user");
    }

    await recipeDatabase.deleteRecipe(idRecipe);

    res.status(200).send({
      message: "Deleted",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
});