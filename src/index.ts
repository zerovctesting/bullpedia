interface PageContent {
    title: string;
    shortBio: string;
    mainContent: string;
}

const brettPageData: PageContent = {
    title: "Brett Adcock",
    shortBio: "Brett Adcock is a serial entrepreneur who co-founded Vettery (sold 2018), Archer Aviation (EVTOL aircraft company), and Figure AI (humanoid robots). Known for making grandiose claims about revolutionary technology while delivering staged demos and misleading investors.",
    mainContent: `
        <h2>Background</h2>
        <p>Brett Adcock co-founded the online hiring platform Vettery in 2013 with Adam Goldstein, which they sold to Adecco in 2018. Despite having no aerospace or robotics experience, Adcock then co-founded two highly technical companies: Archer Aviation (2018) and Figure AI (2022).</p>

        <h2>Archer Aviation Failures</h2>
        <p>As co-CEO of Archer Aviation, Adcock oversaw the development of an electric vertical takeoff and landing (EVTOL) aircraft. The original design was fundamentally flawed and had to be completely redesigned. The company staged multiple fake deliveries and misleading demonstrations, including a 2025 "piloted test flight" using their old non-commercial design that cannot transition to forward flight.</p>

        <h2>Figure AI Deceptions</h2>
        <p>Founded Figure AI in 2022 with $10 million of his own money, despite having no formal education or experience in AI or robotics. According to former employees, Adcock took online AI courses and read robotics books to compensate for his lack of expertise.</p>

        <h2>The BMW Partnership Exaggeration</h2>
        <p>In February 2024, Adcock claimed Figure had "a fleet of robots performing end-to-end operations" at BMW. However, BMW confirmed to Fortune magazine they were only running off-hour tests with a single robot performing one simple task: moving sheet metal. Even in October 2025, after nearly 2 years, the robot is still only doing this single repetitive task that could be done by a simple robotic arm.</p>

        <h2>The Fake Home Demo</h2>
        <p>In July 2025, Adcock posted a video claiming to show Figure's robot doing laundry "in the Adcock house" with his children present. Later footage revealed this was actually filmed at Figure's testing facility, not his home. The deception was designed to make the robot appear more capable than it actually is, as it likely only works in this specific controlled environment.</p>

        <h2>Misleading Investors</h2>
        <p>Despite the robot's limited capabilities and staged demonstrations, Figure raised $675 million in February 2024 from investors including Jeff Bezos, Nvidia, and OpenAI, valuing the company at $2.6 billion. Sam Altman has publicly promoted the narrative that humanoid robots will soon take everyone's jobs, despite OpenAI's investment in this apparently non-functional technology.</p>

        <h2>Pattern of Deception</h2>
        <p>Adcock's pattern across companies is consistent: make revolutionary claims, raise massive funding, deliver staged demos that misrepresent actual capabilities, and move on to the next venture before the previous one's failures become fully apparent.</p>
    `
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