document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    const gameListContainer = document.getElementById('gameListContainer');
    navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
            e.preventDefault();
            fetchGames(this.dataset.game);
        });
    });
    function fetchGames(gameType) {
        const games = [
            { name: '俄罗斯大贝塔', type: 'action', image: 'game1.jpg', text: 'Russia big beta is the most wonderful car in the world!' },
            { name: '豆角', type: 'rpg', image: 'game2.jpg', text: 'Who said this bean is old? This bean is fantastic ' },
            { name: '贪吃蛇', type: 'strategy', image: 'game3.jpg', text: 'Snake is a fun game,I like to play it.' },
            { name: '奶龙', type: 'puzzle', image: 'game4.jpg', text: 'The milk dragon is a very cute cartoon character' },
            { name: '牢大', type: 'sports', image: 'game5.jpg', text: 'laoda is the best pilot in the world!' }
        ].filter(game => game.type === gameType);
        gameListContainer.innerHTML = games.map(game => `<div class="card mb-3 shadow-sm">
            <img src="${game.image}" class="card-img-top" alt="${game.name}" style="width:200px;height:200px;">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">${game.text}</p >
                <a href="loading.html" class="btn btn-primary">for more</a >
            </div>
        </div>`).join('');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        var comment = document.getElementById('commentInput').value;
        if (comment.trim() !== '') {
            var encodedComment = encodeURIComponent(comment);
            window.location.href = 'comments.html?comment=' + encodedComment;
        }
    });
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var triggerPoint = document.querySelector('main').offsetHeight;
    if (scrollPosition > triggerPoint) {
        document.querySelector('.features').style.opacity = '1';
        document.querySelector('.features').style.transform = 'translateY(-100%)';
    }
});
let isFullScreen = false;
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var triggerPoint = document.querySelector('main').offsetHeight;
    if (!isFullScreen && scrollPosition > triggerPoint) {
        document.querySelector('.features').style.opacity = '1';
        document.querySelector('.features').style.transform = 'translateY(-100%)';
        isFullScreen = true;
    } else if (isFullScreen && scrollPosition <= triggerPoint) {
        document.querySelector('.features').style.opacity = '0';
        document.querySelector('.features').style.transform = 'translateY(20px)';
        isFullScreen = false;
    }
});