interface Claim {
    id: string;
    category: 'factual-contradiction' | 'manipulative-language' | 'pattern';
    severity: 'low' | 'medium' | 'high' | 'critical';
    title: string;
    claim: string;
    reality: string;
    evidence: string[];
    source: string;
    date?: string;
}

const brettAdcockClaims: Claim[] = [
    {
        id: "brett-bmw-1",
        category: "factual-contradiction",
        severity: "critical",
        title: "BMW Partnership Exaggeration",
        claim: "Figure has 'a fleet of robots performing end-to-end operations' at BMW",
        reality: "BMW confirmed they only run off-hour tests with a single robot performing one simple task: moving sheet metal",
        evidence: [
            "BMW statement to Fortune magazine contradicting Adcock's claims",
            "After nearly 2 years, robot still only does single repetitive task",
            "Task could be performed by simple robotic arm, not humanoid robot"
        ],
        source: "Fortune magazine BMW investigation",
        date: "February 2024"
    },
    {
        id: "brett-home-1",
        category: "factual-contradiction",
        severity: "critical",
        title: "Fake Home Demonstration",
        claim: "Robot doing laundry 'in the Adcock house' with his children present",
        reality: "Video was actually filmed at Figure's testing facility, not his home",
        evidence: [
            "Later footage revealed filming location was Figure facility",
            "Deception designed to make robot appear more capable",
            "Robot likely only works in controlled testing environment"
        ],
        source: "Video analysis investigation",
        date: "July 2025"
    },
    {
        id: "brett-archer-1",
        category: "factual-contradiction",
        severity: "high",
        title: "Archer Aviation Fake Deliveries",
        claim: "Successful EVTOL aircraft development and commercial readiness",
        reality: "Original design was fundamentally flawed, required complete redesign, staged fake deliveries and misleading demonstrations",
        evidence: [
            "2025 'piloted test flight' used old non-commercial design",
            "Aircraft shown cannot transition to forward flight",
            "Multiple staged fake deliveries documented"
        ],
        source: "Aviation industry analysis",
        date: "2025"
    },
    {
        id: "brett-expertise-1",
        category: "manipulative-language",
        severity: "high",
        title: "False Technical Authority",
        claim: "Leading expert in AI and robotics founding Figure AI",
        reality: "Has no formal education or experience in AI/robotics, took online courses to compensate for lack of expertise",
        evidence: [
            "Former employees confirm he read robotics books after founding company",
            "Took online AI courses post-founding",
            "No aerospace experience before founding Archer Aviation"
        ],
        source: "Former employee testimonies",
        date: "2022-2024"
    },
    {
        id: "brett-pattern-1",
        category: "pattern",
        severity: "critical",
        title: "Serial Overpromising and Misdirection",
        claim: "Building revolutionary technology companies with breakthrough innovations",
        reality: "Consistent pattern: make revolutionary claims, raise massive funding, deliver staged demos that misrepresent capabilities, move to next venture",
        evidence: [
            "Figure AI raised $675M from major investors including Bezos, Nvidia, OpenAI",
            "$2.6B valuation despite limited robot capabilities",
            "Pattern repeated across Archer Aviation and Figure AI",
            "Staged demonstrations across multiple companies",
            "Sam Altman promoting humanoid robot job displacement narrative while investing in non-functional technology"
        ],
        source: "Cross-company pattern analysis",
        date: "2018-2025"
    }
];

function calculateBrettRiskScore(claims: Claim[]): { score: number; maxRisk: boolean } {
    const categories = {
        'factual-contradiction': false,
        'manipulative-language': false,
        'pattern': false
    };

    let totalScore = 0;

    claims.forEach(claim => {
        categories[claim.category] = true;

        switch (claim.severity) {
            case 'low': totalScore += 25; break;
            case 'medium': totalScore += 50; break;
            case 'high': totalScore += 75; break;
            case 'critical': totalScore += 100; break;
        }
    });

    const hasAllThree = Object.values(categories).every(v => v);
    const maxRisk = hasAllThree && totalScore >= 300;

    return { score: Math.min(totalScore, 10000), maxRisk };
}

function generateBrettClaimsHTML(claims: Claim[], maxRisk: boolean, riskScore: number): string {
    const categoryHeaders = {
        'factual-contradiction': 'Factual Contradictions',
        'manipulative-language': 'Manipulative Language',
        'pattern': 'Behavioral Patterns'
    };

    const severityColors = {
        'low': '#28a745',
        'medium': '#ffc107',
        'high': '#fd7e14',
        'critical': '#dc3545'
    };

    let html = `<div class="risk-assessment">`;

    if (maxRisk) {
        html += `<div class="max-risk-warning">⚠️ MAXIMUM RISK - All three deception categories present (Score: ${riskScore})</div>`;
    } else {
        html += `<div class="risk-score">Risk Score: ${riskScore}</div>`;
    }

    html += `</div>`;

    const categories: Array<'factual-contradiction' | 'manipulative-language' | 'pattern'> = ['factual-contradiction', 'manipulative-language', 'pattern'];

    categories.forEach(category => {
        const categoryClaims = claims.filter(claim => claim.category === category);
        if (categoryClaims.length > 0) {
            html += `<h2>${categoryHeaders[category]}</h2>`;

            categoryClaims.forEach(claim => {
                html += `
                    <div class="claim-item">
                        <h3 class="claim-title">${claim.title}
                            <span class="severity-badge" style="background-color: ${severityColors[claim.severity]}">${claim.severity.toUpperCase()}</span>
                        </h3>
                        <div class="claim-vs-reality">
                            <div class="claim-section">
                                <strong>Claim:</strong> ${claim.claim}
                            </div>
                            <div class="reality-section">
                                <strong>Reality:</strong> ${claim.reality}
                            </div>
                        </div>
                        <div class="evidence-section">
                            <strong>Evidence:</strong>
                            <ul>
                                ${claim.evidence.map(evidence => `<li>${evidence}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="source-info">
                            <small>Source: ${claim.source}${claim.date ? ` (${claim.date})` : ''}</small>
                        </div>
                    </div>
                `;
            });
        }
    });

    return html;
}

const brettRiskData = calculateBrettRiskScore(brettAdcockClaims);

const brettPageData = {
    title: "Brett Adcock",
    shortBio: "Brett Adcock is a serial entrepreneur who co-founded Vettery, Archer Aviation, and Figure AI. Known for systematic deception involving false capability claims, misleading demonstrations, and operating a pattern of investor fraud across multiple companies.",
    mainContent: generateBrettClaimsHTML(brettAdcockClaims, brettRiskData.maxRisk, brettRiskData.score)
};

function initializeBrettPage(): void {
    const titleElement = document.getElementById('page-title');
    const bioElement = document.getElementById('short-bio');
    const contentElement = document.getElementById('main-content');

    if (titleElement) {
        titleElement.textContent = brettPageData.title;
    }

    if (bioElement) {
        bioElement.textContent = brettPageData.shortBio;
    }

    if (contentElement) {
        contentElement.innerHTML = brettPageData.mainContent;
    }
}

document.addEventListener('DOMContentLoaded', initializeBrettPage);