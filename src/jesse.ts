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

const jesseLyuClaims: Claim[] = [
    {
        id: "jesse-lam-1",
        category: "factual-contradiction",
        severity: "critical",
        title: "False AI Model Claims",
        claim: "LAM (Large Action Model) is a revolutionary new foundational AI model that can control apps and websites like a human",
        reality: "LAM doesn't exist as described - the R1 primarily uses ChatGPT 3.5 with hardcoded Playwright automation scripts",
        evidence: [
            "Security researchers found R1 uses ChatGPT API calls",
            "Device contains Playwright automation scripts, not AI models",
            "Prompts instruct device to 'never mention I am a large language model created by OpenAI'"
        ],
        source: "Security research investigation",
        date: "2024"
    },
    {
        id: "jesse-lam-2",
        category: "factual-contradiction",
        severity: "critical",
        title: "Capability Fraud",
        claim: "R1 can autonomously control websites, organize your life, text friends, restock your fridge",
        reality: "Device uses rigid scripts that break when websites change their interface, proving no adaptive AI capabilities",
        evidence: [
            "R1 stops working when Spotify or DoorDash update their UI",
            "Marketing videos show fake autonomous website control",
            "Device cannot perform advertised life management tasks"
        ],
        source: "User testing and technical analysis",
        date: "2024"
    },
    {
        id: "jesse-deflection-1",
        category: "manipulative-language",
        severity: "high",
        title: "False Equivalency Defense",
        claim: "LAM is just Playwright is equal to say ChatGPT is just a chat",
        reality: "Nonsensical deflection attempting to equate a simple automation tool with actual AI capabilities",
        evidence: [
            "Statement made when confronted about using Playwright instead of AI",
            "Attempts to minimize the fundamental deception about core technology"
        ],
        source: "Public response to criticism",
        date: "2024"
    },
    {
        id: "jesse-gatekeeping-1",
        category: "manipulative-language",
        severity: "high",
        title: "Credential Gatekeeping",
        claim: "Critics need 'valid certificates' in AI to question him, journalists without AI/ML specialization have 'no real credibility'",
        reality: "Using false authority to deflect legitimate questions about deceptive practices",
        evidence: [
            "Told critics 'I work for my team, I don't work for you'",
            "Demanded AI credentials from investigators",
            "Company dismissed journalist questions based on lack of AI specialization"
        ],
        source: "Responses to journalists and researchers",
        date: "2024"
    },
    {
        id: "jesse-pattern-1",
        category: "pattern",
        severity: "critical",
        title: "Systematic Deception Operation",
        claim: "Running legitimate AI hardware company with transparent technology",
        reality: "Orchestrated multi-level deception including fake technology claims, misleading marketing, programmed lies, and aggressive defense of falsehoods",
        evidence: [
            "$20M+ in pre-sales based on false claims",
            "$30M venture capital raised on fake technology",
            "Employee whistleblower confirmed LAM 'does not exist' as marketing term",
            "Privacy violations despite security marketing",
            "Hostile responses to legitimate investigation"
        ],
        source: "Comprehensive investigation",
        date: "2024"
    }
];

function calculateJesseRiskScore(claims: Claim[]): { score: number; maxRisk: boolean } {
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

function generateJesseClaimsHTML(claims: Claim[], maxRisk: boolean, riskScore: number): string {
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

const jesseRiskData = calculateJesseRiskScore(jesseLyuClaims);

const jessePageData = {
    title: "Jesse Lyu",
    shortBio: "Jesse Lyu is the founder and CEO of Rabbit Inc., creator of the Rabbit R1 device. Known for systematic deception involving fake AI claims, manipulative responses to criticism, and operating a pattern of investor and consumer fraud.",
    mainContent: generateJesseClaimsHTML(jesseLyuClaims, jesseRiskData.maxRisk, jesseRiskData.score)
};

function initializeJessePage(): void {
    const titleElement = document.getElementById('page-title');
    const bioElement = document.getElementById('short-bio');
    const contentElement = document.getElementById('main-content');

    if (titleElement) {
        titleElement.textContent = jessePageData.title;
    }

    if (bioElement) {
        bioElement.textContent = jessePageData.shortBio;
    }

    if (contentElement) {
        contentElement.innerHTML = jessePageData.mainContent;
    }
}

document.addEventListener('DOMContentLoaded', initializeJessePage);