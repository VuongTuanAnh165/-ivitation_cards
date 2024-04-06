

$(document).ready(function () {
	const data = [
		{
			"id": 26122001,
			"pronouns": "mẹ già",
			"name": "Phạm Thanh Tâm",
			'avatar': 'image/26122001.jpg'
		},
		{
			"id": 24092001,
			"pronouns": "bạn",
			"name": "Mít xinh đẹp",
			'avatar': 'image/24092001.jpg'
		},
		{
			"id": 962006,
			"pronouns": "con em xấu xa",
			"name": "Ngọc còi",
			'avatar': 'image/962006.jpg'
		},
	]

	function getText() {
		const queryString = window.location.search.replace("?", '');
		const indexOfAmpersand = queryString.indexOf('&');
		const key = queryString.slice(1, indexOfAmpersand);
		const result = data.find(item => item.id === Number(key));
		$("#pronouns").text(result.pronouns)
		$("#name").text(result.name)
		$("#avatar").attr("src", result.avatar)
	}

	getText()
});

document.addEventListener('DOMContentLoaded', function() {
    var player = document.getElementById('player');

    // Chờ sự kiện click trên trang web
    document.addEventListener('click', function() {
        // Phát nhạc khi có sự tương tác từ người dùng
        player.play();
        // Loại bỏ sự kiện click sau khi phát nhạc
        document.removeEventListener('click', arguments.callee);
    });
    // Lặp lại phát nhạc khi kết thúc
    player.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    });
});
