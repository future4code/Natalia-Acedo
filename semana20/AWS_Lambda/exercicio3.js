exports.handler = async (event) => {
    const sum = event.a + event.b
	return {body: JSON.stringify({sum})}
}