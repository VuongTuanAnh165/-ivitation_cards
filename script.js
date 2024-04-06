

$(document).ready(function () {
	const data = [
		{
			"id": 26122001,
			"pronouns": "mẹ già",
			"name": "Phạm Thanh Tâm",
			'avatar': 'image/26122001.jpg'
		},
		{
			"id": 2,
			"name": "Mít xinh đẹp"
		},
	]

	function getText() {
		const queryString = window.location.search.replace("?", '');
		const result = data.find(item => item.id === Number(queryString));
		console.log(result)
		$("#pronouns").text(result.pronouns)
		$("#name").text(result.name)
		$("#avatar").attr("src", result.avatar)
	}

	getText()
});
