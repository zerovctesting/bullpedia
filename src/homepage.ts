interface PageRanking {
    rank: number;
    title: string;
    url: string;
    score?: number;
}

const rankings: PageRanking[] = [
    { rank: 1, title: "Jesse Lyu", url: "jesse.html", score: 9950 },
    { rank: 2, title: "Brett Adcock", url: "index.html", score: 9900 },
    { rank: 3, title: "Sam Bankman-Fried", url: "#", score: 9850 },
    { rank: 4, title: "Elizabeth Holmes", url: "#", score: 9800 },
    { rank: 5, title: "Trevor Milton", url: "#", score: 9750 },
    { rank: 6, title: "Adam Neumann", url: "#", score: 9700 },
    { rank: 7, title: "Billy McFarland", url: "#", score: 9650 },
    { rank: 8, title: "Carlos Watson", url: "#", score: 9600 },
    { rank: 9, title: "Martin Shkreli", url: "#", score: 9550 },
    { rank: 10, title: "Do Kwon", url: "#", score: 9500 },
    { rank: 11, title: "Alex Mashinsky", url: "#", score: 9450 },
    { rank: 12, title: "Changpeng Zhao", url: "#", score: 9400 },
    { rank: 13, title: "Gary Wang", url: "#", score: 9350 },
    { rank: 14, title: "Caroline Ellison", url: "#", score: 9300 },
    { rank: 15, title: "Ryan Cohen", url: "#", score: 9250 },
    { rank: 16, title: "Chamath Palihapitiya", url: "#", score: 9200 },
    { rank: 17, title: "Jack Dorsey", url: "#", score: 9150 },
    { rank: 18, title: "Mark Zuckerberg", url: "#", score: 9100 },
    { rank: 19, title: "Elon Musk", url: "#", score: 9050 },
    { rank: 20, title: "Peter Thiel", url: "#", score: 9000 },
    { rank: 21, title: "Marc Andreessen", url: "#", score: 8950 },
    { rank: 22, title: "Reid Hoffman", url: "#", score: 8900 },
    { rank: 23, title: "Travis Kalanick", url: "#", score: 8850 },
    { rank: 24, title: "Evan Spiegel", url: "#", score: 8800 },
    { rank: 25, title: "Bobby Kotick", url: "#", score: 8750 },
    { rank: 26, title: "Tim Cook", url: "#", score: 8700 },
    { rank: 27, title: "Satya Nadella", url: "#", score: 8650 },
    { rank: 28, title: "Jensen Huang", url: "#", score: 8600 },
    { rank: 29, title: "Larry Ellison", url: "#", score: 8550 },
    { rank: 30, title: "Michael Saylor", url: "#", score: 8500 },
    { rank: 31, title: "Cathie Wood", url: "#", score: 8450 },
    { rank: 32, title: "Bill Ackman", url: "#", score: 8400 },
    { rank: 33, title: "Carl Icahn", url: "#", score: 8350 },
    { rank: 34, title: "Jim Cramer", url: "#", score: 8300 },
    { rank: 35, title: "Dave Portnoy", url: "#", score: 8250 },
    { rank: 36, title: "Grant Cardone", url: "#", score: 8200 },
    { rank: 37, title: "Tai Lopez", url: "#", score: 8150 },
    { rank: 38, title: "Dan Bilzerian", url: "#", score: 8100 },
    { rank: 39, title: "Jake Paul", url: "#", score: 8050 },
    { rank: 40, title: "Logan Paul", url: "#", score: 8000 },
    { rank: 41, title: "Andrew Tate", url: "#", score: 7950 },
    { rank: 42, title: "Jordan Belfort", url: "#", score: 7900 },
    { rank: 43, title: "Frank Abagnale", url: "#", score: 7850 },
    { rank: 44, title: "Anna Delvey", url: "#", score: 7800 },
    { rank: 45, title: "Ja Rule", url: "#", score: 7750 },
    { rank: 46, title: "Soulja Boy", url: "#", score: 7700 },
    { rank: 47, title: "Floyd Mayweather", url: "#", score: 7650 },
    { rank: 48, title: "Steven Seagal", url: "#", score: 7600 },
    { rank: 49, title: "John McAfee", url: "#", score: 7550 },
    { rank: 50, title: "Craig Wright", url: "#", score: 7500 }
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