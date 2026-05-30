export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find What&apos;s Slowing Down{" "}
          <span className="text-[#58a6ff]">Your PR Reviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub org and instantly see which PRs, reviewers, and
          workflows are killing your team&apos;s cycle time — with actionable fixes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15 / mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Social proof bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <div><span className="text-white font-semibold">2.4×</span> faster review cycles</div>
          <div><span className="text-white font-semibold">10+</span> team orgs supported</div>
          <div><span className="text-white font-semibold">100%</span> GitHub API — no code access</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, per organization</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repos & PRs analyzed",
              "Reviewer bottleneck heatmaps",
              "Cycle time trend charts",
              "Weekly email digest",
              "GitHub OAuth — read-only access",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Does this require access to my source code?",
              a: "No. We only request read-only access to PR metadata via the GitHub API — titles, timestamps, reviewers, and labels. Your code is never accessed or stored.",
            },
            {
              q: "How quickly will I see insights after connecting?",
              a: "Within minutes. We backfill up to 90 days of PR history on first connect and surface your top bottlenecks immediately on the dashboard.",
            },
            {
              q: "Can I manage multiple GitHub organizations?",
              a: "Yes. Each $15/mo subscription covers one GitHub organization. You can add additional orgs from your billing dashboard at the same rate.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PR Time Waste Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
