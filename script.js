$(document).ready(function () {
	const data = [
		{
			id: 26122001,
			pronouns: "mẹ già",
			name: "Phạm Thanh Tâm",
			avatar: "image/26122001.jpg",
		},
		{
			id: 2492001,
			pronouns: "bạn",
			name: "Mít xinh đẹp",
			avatar: "image/24092001.jpg",
		},
		{
			id: 962006,
			pronouns: "con em xấu xa",
			name: "Ngọc còi",
			avatar: "image/962006.jpg",
		},
		{
			id: 1121998,
			pronouns: "chị",
			name: "Uyên xề và gia đình",
			avatar: "image/1121998.jpg",
		},
		{
			id: 1791993,
			pronouns: "chị",
			name: "Trang voi và gia đình",
			avatar: "image/1791993.jpg",
		},
		{
			id: 2332006,
			pronouns: "em",
			name: "Lý không chịu ngủ",
			avatar: "image/2332006.jpg",
		},
		{
			id: 20112002,
			pronouns: "đứa cháu",
			name: "Thảo mồm điêu",
			avatar: "image/20112002.jpg",
		},
		{
			id: 462005,
			pronouns: "em",
			name: "Bình giò trả",
			avatar: "image/462005.jpg",
		},
		{
			id: 972001,
			pronouns: "bạn 'nhậu'",
			name: "Mạc Lâm",
			avatar: "image/972001.jpg",
		},
		{
			id: 21102000,
			pronouns: "ông anh",
			name: "Hưng âm 50 điểm",
			avatar: "image/21102000.jpg",
		},
		{
			id: 2732002,
			pronouns: "ông anh",
			name: "Hưng âm 50 điểm",
			avatar: "image/21102000.jpg",
		},
		{
			id: 2472001,
			pronouns: "bạn",
			name: "Yến xinh đẹp",
			avatar: "image/2472001.jpg",
		},
	];

	function getText() {
		const url = window.location.search;
		const startIndex = url.indexOf("?") + 1;
		const endIndex = url.indexOf("&");
		const key = url.substring(
			startIndex,
			endIndex !== -1 ? endIndex : url.length
		);
		const result = data.find((item) => item.id === Number(key));
		console.log(result);
		$(".pronouns-to").text(result.pronouns);
		$(".name-to").text(result.name);
		$(".avatar-to").attr("src", result.avatar);
	}

	getText();
});

document.addEventListener("DOMContentLoaded", function () {
	var player = document.getElementById("player");
	document.addEventListener("click", function () {
		player.play();
		document.removeEventListener("click", arguments.callee);
	});
	player.addEventListener("ended", function () {
		this.currentTime = 0;
		this.play();
	});
});
