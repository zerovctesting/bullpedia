interface PageRanking {
    rank: number;
    title: string;
    url: string;
    score?: number;
}

const rankings: PageRanking[] = [
    { rank: 1, title: "Brett Adcock", url: "index.html", score: 375 },
    { rank: 2, title: "Jesse Lyu", url: "jesse.html", score: 350 }
];

function renderRankings(): void {
    const listElement = document.getElementById('rankings-list');

    if (!listElement) return;

    rankings.forEach(item => {
        const li = document.createElement('li');
        li.className = 'ranking-item';

        const rankSpan = document.createElement('span');
        rankSpan.className = 'rank-number';
        rankSpan.textContent = item.rank.toString();

        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'page-link';
        link.textContent = item.title;

        if (item.url === '#') {
            link.onclick = (e) => {
                e.preventDefault();
                alert('Page not yet created');
            };
        }

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        if (item.score) {
            scoreSpan.textContent = `Score: ${item.score}`;
        }

        li.appendChild(rankSpan);
        li.appendChild(link);
        if (item.score) {
            li.appendChild(scoreSpan);
        }

        listElement.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderRankings);