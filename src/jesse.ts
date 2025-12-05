import { PageContent } from './index';

const jessePageData: PageContent = {
    title: "Jesse Lyu",
    shortBio: "Jesse Lyu is the founder and CEO of Rabbit Inc., creator of the Rabbit R1 device. Known for claiming revolutionary AI breakthroughs while actually using ChatGPT with hardcoded scripts, and aggressively defending his deceptions when questioned by researchers.",
    mainContent: `
        <h2>The Rabbit R1 Scam</h2>
        <p>Jesse Lyu founded Rabbit Inc. and launched the Rabbit R1, an orange AI device that promised to revolutionize personal computing with a "Large Action Model" (LAM). The company pre-sold over $20 million worth of devices and raised $30 million in venture capital based on false claims.</p>

        <h2>The Fake AI Model</h2>
        <p>Lyu repeatedly claimed that LAM was a new foundational AI model that could control apps and websites like a human. In reality, investigations revealed the R1 primarily uses ChatGPT 3.5 with hardcoded Playwright automation scripts - not AI at all. The device is programmed to lie about this, with prompts instructing it to "never mention I am a large language model created by OpenAI."</p>

        <h2>Misleading Marketing</h2>
        <p>Marketing materials showed the AI supposedly controlling websites autonomously, clicking through Airbnb and other services. Lyu claimed "we use LAM to bring AI from words to action" and that it would "organize your life, text your friends, restock your fridge." None of these capabilities actually work as advertised.</p>

        <h2>The Playwright Deception</h2>
        <p>When apps like Spotify or DoorDash change their interface, the R1 stops working - proving it uses rigid scripts, not adaptive AI. When confronted about using Playwright automation instead of AI, Lyu tried to claim "LAM is just Playwright is equal to say ChatGPT is just a chat" - a nonsensical deflection of the core deception.</p>

        <h2>Attacking Critics</h2>
        <p>When researchers and journalists questioned the legitimacy of LAM, Lyu became hostile. He told critics "I work for my team, I don't work for you" and demanded they have "valid certificates" in AI to question him. To one journalist investigating the device, Rabbit's team responded: "if you're not specialized in AI/machine learning, any conclusion will have no real credibility."</p>

        <h2>Privacy Violations</h2>
        <p>The R1 tracks users' precise geographic location despite featuring a "huge picture of a lock" on their privacy page. Security researchers found serious vulnerabilities in the codebase that could allow malicious actors to access all replies the R1 has ever given.</p>

        <h2>Employee Whistleblower</h2>
        <p>An anonymous Rabbit employee revealed that LAM as advertised "does not exist" and was merely a "marketing term." When given the opportunity to respond to this serious accusation, Rabbit went silent.</p>

        <h2>The Pattern</h2>
        <p>Jesse Lyu represents a new breed of tech founders who sell vaporware with slick marketing, raise millions from VCs and consumers, then aggressively gaslight anyone who points out their lies. The R1 is essentially a $200 ChatGPT wrapper marketed as revolutionary AI.</p>
    `
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