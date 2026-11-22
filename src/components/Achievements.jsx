const patents = [
  {
    title: 'Adaptive Cache Management in Heterogeneous Multi-Tenant Clouds',
    inventors: 'Akash L, Anurag Prabhu',
    filed: 'March 3, 2026',
    description:
      'An ML-driven approach to adaptive cache management and SLA-aware resource allocation in cloud environments.',
  },
  {
    title: 'Dynamic Multi-Context Attention Network (DMCAN)',
    inventors: 'Akash L, Anurag Prabhu',
    filed: 'August 11, 2026',
    description:
      'A Transformer encoder-decoder for CI/CD regression test-case prioritization, using fast-fail evaluation, multi-context attention, and a self-improving reinforcement-learning feedback loop.',
  },
  {
    title: 'HIERARCH - Hierarchical Latency-Aware Structural Prefetcher',
    inventors: 'Akash L, Anurag Prabhu, Vinayaka H',
    filed: 'September 11, 2026',
    description:
      'A CPU prefetcher that infers memory-traversal structure from L1-miss latency patterns in pointer-rich workloads. Its motif-based approach is address-agnostic and semantics-free.',
  },
]

function Achievements() {
  return (
    <section id="achievements" className="px-10 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Achievements</h2>
          <div className="mt-4 mx-auto w-[19.5rem] h-1 rounded-full bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {patents.map((patent) => (
            <article
              key={patent.title}
              className="group rounded-2xl border border-slate-600 bg-black p-6 transition-colors duration-300 hover:border-cyan-400 hover:bg-white hover:text-blue-900"
            >
              <p className="font-semibold text-cyan-400">USPTO-Filed Patent</p>
              <h4 className="mt-2 text-xl font-semibold text-blue-400">{patent.title}</h4>
              <p className="mt-4 text-gray-300 group-hover:text-blue-900">
                <strong>Inventors:</strong> {patent.inventors}
              </p>
              <p className="mt-1 text-gray-300 group-hover:text-blue-900">
                <strong>USPTO filed:</strong> {patent.filed}
              </p>
              <p className="mt-4 leading-relaxed text-justify text-gray-300 group-hover:text-blue-900">
                {patent.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="group rounded-2xl border border-slate-600 bg-black p-6 transition-colors duration-300 hover:border-cyan-400 hover:bg-white hover:text-blue-900">
            <p className="font-semibold text-cyan-400">Dell Hackathon 2026 - Local Winner</p>
            <h3 className="mt-2 text-2xl font-semibold text-blue-400">
              Virtual Camera Driver for Concurrent Presence Detection
            </h3>
            <p className="mt-4 leading-relaxed text-justify text-gray-300 group-hover:text-blue-900">
              Built virtual camera driver that shares webcam frames across apps, keeping Dell&apos;s
              Walk Away Lock, Look Away Dim, Onlooker Detection active during Zoom & Teams calls. 
              Integrated AI-adaptive Weighted Round Robin scheduler, context-aware power optimization, 
              & CNN inference on Dell&apos;s Clover Falls AI coprocessor.
            </p>
          </article>

          <article className="group rounded-2xl border border-slate-600 bg-black p-6 transition-colors duration-300 hover:border-cyan-400 hover:bg-white hover:text-blue-900">
            <p className="font-semibold text-cyan-400">
              AICECS 2021 - IOP Journal of Physics Conference
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-blue-400">
              Prediction of Lung Cancer Using Ensemble Classifier
            </h3>
            <p className="mt-4 leading-relaxed text-justify text-gray-300 group-hover:text-blue-900">
              Designed five ML models (SVM, Logistic Regression, MLP, Decision Tree, and KNN) using
              OpenCV image segmentation and feature extraction. Achieved 91% accuracy on 978 CT
              images, outperforming Random Forest at 87%.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Achievements
