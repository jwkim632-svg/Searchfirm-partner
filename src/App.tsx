/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Database, 
  ArrowRight, 
  ChevronRight,
  AlertCircle,
  Zap,
  DollarSign
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">SEARCHFIRM PARTNER</span>
        </div>
        <a 
          href="#apply" 
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          지원하기
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-black uppercase bg-gray-100 rounded-full">
          3초 컷 헤드라인
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]">
          혼자 하는 서치펌,<br />
          <span className="text-gray-400">이제 끝내세요.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
          혼자 일하지만 조직처럼 벌 수 있습니다. <br className="hidden md:block" />
          수익은 극대화하고, 고정비는 0원으로.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#apply" 
            className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-black/10"
          >
            파트너 지원하기 <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#solution" 
            className="flex items-center justify-center gap-2 bg-white text-black border-2 border-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors"
          >
            모델 자세히 보기
          </a>
        </div>
      </motion.div>
    </div>
    
    {/* Background Decoration */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5 pointer-events-none">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  </section>
);

const Problem = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-template-columns-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              고객사 확보가 점점 어려워지시죠?
            </h2>
            <p className="text-lg text-gray-600">
              혼자서 모든 걸 처리하기 버겁지 않으신가요? <br />
              지금 구조로는 한계가 있습니다.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              "수주까지 시간이 너무 오래 걸린다",
              "고급 인재 DB가 항상 부족하다",
              "계약, 정산 등 행정 업무가 부담스럽다",
              "매출이 들쭉날쭉하여 불안정하다"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 italic">"혼자서는 1인분의 매출만 가능하지만,<br />함께하면 조직의 인프라를 누립니다."</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">매출 구조 개선</h4>
                  <p className="text-gray-400 text-sm">단순 영업을 넘어 시스템 기반의 수익 창출</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">독립성 유지</h4>
                  <p className="text-gray-400 text-sm">나만의 영업 방식은 그대로, 지원은 본사에서</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tight mb-4">Shop in Shop 모델</h2>
        <p className="text-xl text-gray-600 italic">"이렇게 일합니다"</p>
      </div>
      
      <div className="grid md:grid-template-columns-3 gap-8">
        <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50 space-y-6">
          <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">파트너 (나)</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 고객사 발굴 및 관리</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 후보자 인터뷰 및 추천</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 전문 산업 분야 집중</li>
          </ul>
        </div>
        
        <div className="p-8 rounded-3xl border-2 border-black bg-white space-y-6 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Support
          </div>
          <div className="w-12 h-12 bg-gray-100 text-black rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">본사 (지원)</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 계약 및 법무 지원</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 정산 및 세무 관리</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 고급 인재 DB 공유</li>
          </ul>
        </div>
        
        <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50 space-y-6">
          <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">수익 쉐어</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 최대 수익 쉐어 70%</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 고정비 0원 (리스크 제로)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 성과 기반 투명한 정산</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-template-columns-1 md:grid-template-columns-3 gap-12 text-center">
        <div className="space-y-4">
          <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">최대 수익 쉐어</p>
          <h3 className="text-6xl font-black">70%</h3>
          <p className="text-sm text-gray-500 italic">업계 최고 수준의 대우</p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">평균 매출 증가</p>
          <h3 className="text-6xl font-black">1.5~2배</h3>
          <p className="text-sm text-gray-500 italic">조직 인프라 활용의 결과</p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">초기 고정비</p>
          <h3 className="text-6xl font-black">0원</h3>
          <p className="text-sm text-gray-500 italic">리스크 없이 시작하세요</p>
        </div>
      </div>
    </div>
  </section>
);

const BeforeAfter = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Before & After</h2>
      </div>
      
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-template-columns-2 bg-gray-50 border-b border-gray-200">
          <div className="p-6 text-center font-bold text-gray-500 uppercase tracking-widest text-sm">Before (혼자)</div>
          <div className="p-6 text-center font-bold text-black uppercase tracking-widest text-sm bg-white border-l border-gray-200">After (함께)</div>
        </div>
        
        {[
          ["혼자 영업", "고객사/후보자 공유"],
          ["DB 부족", "고급 인재 DB 제공"],
          ["매출 불안정", "안정적이고 높은 수익"],
          ["행정 업무 부담", "본사 행정 지원 시스템"]
        ].map(([before, after], i) => (
          <div key={i} className="grid grid-template-columns-2 border-b border-gray-100 last:border-0">
            <div className="p-8 text-center text-gray-400 line-through decoration-gray-300">{before}</div>
            <div className="p-8 text-center font-bold text-gray-900 bg-white border-l border-gray-200 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> {after}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">사회적 증거</h2>
      </div>
      
      <div className="grid md:grid-template-columns-2 gap-8">
        <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 relative">
          <div className="text-4xl text-gray-200 absolute top-6 left-6 font-serif">"</div>
          <p className="text-xl font-bold text-gray-800 relative z-10 mb-6">
            “3개월 만에 매출 2배 증가했습니다. <br />
            혼자 할 때보다 시간은 줄고 수익은 늘었어요.”
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <p className="font-bold text-sm">김OO 파트너</p>
              <p className="text-xs text-gray-500 italic">IT 전문 헤드헌터</p>
            </div>
          </div>
        </div>
        
        <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 relative">
          <div className="text-4xl text-gray-200 absolute top-6 left-6 font-serif">"</div>
          <p className="text-xl font-bold text-gray-800 relative z-10 mb-6">
            “첫 달에 바로 2건 성사시켰습니다. <br />
            본사의 DB 지원이 결정적이었습니다.”
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <p className="font-bold text-sm">이OO 파트너</p>
              <p className="text-xs text-gray-500 italic">제조/엔지니어링 전문</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border-2 border-black">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2">지원이 완료되었습니다!</h3>
        <p className="text-gray-600">담당자가 확인 후 24시간 이내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border-2 border-black shadow-2xl">
      <div className="grid md:grid-template-columns-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gray-500">이름</label>
          <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="성함을 입력하세요" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gray-500">경력 (년)</label>
          <input required type="number" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="예: 5" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest text-gray-500">전문 산업 분야</label>
        <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="예: IT, 금융, 제조 등" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest text-gray-500">현재 매출 구간 (월 평균)</label>
        <select required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none">
          <option value="">선택하세요</option>
          <option value="1">500만원 미만</option>
          <option value="2">500만원 ~ 1,000만원</option>
          <option value="3">1,000만원 ~ 2,000만원</option>
          <option value="4">2,000만원 이상</option>
        </select>
      </div>
      <button 
        type="submit" 
        className="w-full bg-black text-white py-5 rounded-xl text-xl font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-black/20"
      >
        파트너 지원하기
      </button>
      <p className="text-center text-xs text-gray-400">최소한의 정보로 전환율을 높였습니다. 안심하고 지원하세요.</p>
    </form>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <BeforeAfter />
        <Testimonials />
        
        <section id="apply" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 space-y-4">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 text-xs font-black rounded-full uppercase tracking-widest animate-pulse">
                Limited Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">지금 10명만 모집합니다</h2>
              <p className="text-xl text-gray-600 italic">선착순 마감 전, 당신의 가치를 증명하세요.</p>
            </div>
            
            <ApplicationForm />
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[20vw] font-black whitespace-nowrap leading-none">
              JOIN US NOW JOIN US NOW JOIN US NOW
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <Zap className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">SEARCHFIRM PARTNER</span>
          </div>
          <p className="text-sm text-gray-400">© 2026 Searchfirm Partner. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
