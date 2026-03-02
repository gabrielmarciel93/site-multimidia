import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Settings, Tv, Camera, Mic, Megaphone, Smartphone, UserCheck, MonitorPlay } from 'lucide-react';

const sectorsData = [
    {
        id: 1,
        title: 'Transmissão',
        icon: Tv,
        func: 'Utiliza câmeras profissionais ou smartphones para capturar o culto. Faz a transmissão ao vivo por plataformas como YouTube, Facebook, Instagram ou aplicativos próprios. Garante alta qualidade de áudio e vídeo e interage com o público online.',
        app: 'Transmissões de cultos dominicais, eventos especiais, batismos ou estudos bíblicos. Disponibilização de gravações (VOD).'
    },
    {
        id: 2,
        title: 'Áudio Técnica (Galera do Som)',
        icon: Mic,
        func: 'Opera mesas de som, microfones, amplificadores e sistemas de áudio. Ajusta volumes, equalizações e efeitos em tempo real. Garante som sem microfonias ou interferências.',
        app: 'Mixagem de bandas ao vivo, gravação de sermões e músicas, configuração para eventos externos.'
    },
    {
        id: 3,
        title: 'Fotografia',
        icon: Camera,
        func: 'Fotografa cultos, eventos, batismos, ações sociais. Edita as fotos para redes sociais e cria álbuns digitais.',
        app: 'Fotos emocionantes de vidas no altar, batismos, cobertura de eventos comunitários e retiros.'
    },
    {
        id: 4,
        title: 'Filmagem (Videomakers)',
        icon: MonitorPlay,
        func: 'Grava sermões, adoração, testemunhos. Edita vídeos rápidos para reels, TikTok. Produz minidocumentários e séries temáticas.',
        app: 'Vídeos curtos com testemunhos, clipes musicais e campanhas evangelísticas em vídeo.'
    },
    {
        id: 5,
        title: 'Social Media',
        icon: Smartphone,
        func: 'Gerencia perfis no Instagram, Facebook, TikTok. Cria conteúdo para engajamento, divulga agenda e interage respondendo DMs de forma humana.',
        app: 'Lançamento de programação, compartilhamento de cortes/nuggets de pregações e cobertura via Stories.'
    },
    {
        id: 6,
        title: 'Designer',
        icon: Settings,
        func: 'Desenvolve artes para redes, cartazes impressos, painéis de LED. Cria logos e identidades visuais completas.',
        app: 'Artes para Páscoa/Natal, slides de projeção (Holyrics/ProPresenter) e identidade de novos ministérios.'
    },
    {
        id: 7,
        title: 'Redator (Copywriter)',
        icon: Megaphone,
        func: 'Escreve copies (textos) para redes, blogs, sites. Desenvolve roteiros para vídeos e cria devocionais e estudos bíblicos.',
        app: 'Legendas engajadoras no Instagram, scripts para transição no culto e textos acolhedores no site.'
    },
    {
        id: 8,
        title: 'Tecnologia (Programação e Infraestrutura)',
        icon: UserCheck,
        func: 'Desenvolve e mantém sites, apps e Landing Pages. Configura Wi-Fi, servidores, implementa softwares de gestão e dá suporte técnico pesado.',
        app: 'Criação do app da igreja, manutenção de rede blindada para a transmissão e manutenção de PCs.'
    },
];

const Sectors = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.card-section-sectors') as HTMLElement[];

        cards.forEach((card) => {
            gsap.fromTo(card,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1,
                    }
                }
            );
        });
    }, { scope: container });

    return (
        <div ref={container} className="bg-black/40">
            <section id="sectors" className="scroll-section py-24 px-6 lg:px-20 min-h-screen border-b border-white/5 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">As Vertentes da <span className="text-brand-blue">Multimídia</span></h2>
                    <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
                        A área de Multimídia é responsável por integrar tecnologia e recursos audiovisuais para enriquecer os cultos, melhorar a comunicação e engajar a comunidade. Um setor de multimídia geralmente funciona com as seguintes vertentes:
                    </p>
                </div>
            </section>

            {sectorsData.map((s) => (
                <section key={s.id} id={`sector-${s.id}`} className="scroll-section flex items-center justify-center min-h-screen px-6 py-20 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                    <div className="card-section-sectors w-full max-w-4xl bg-bg-card p-8 md:p-16 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-origin-center">
                        <div className="flex items-center justify-center gap-6 border-b border-white/10 pb-8 mb-8 flex-col md:flex-row text-center md:text-left">
                            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shrink-0">
                                <s.icon size={32} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white">
                                <span className="text-brand-blue">{s.id}.</span> {s.title}
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                                    Como funciona
                                </h4>
                                <p className="text-text-secondary text-lg md:text-xl leading-relaxed">{s.func}</p>
                            </div>

                            <div className="pt-4">
                                <h4 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-blue/50"></div>
                                    Exemplo de aplicação
                                </h4>
                                <p className="text-text-secondary text-lg md:text-xl leading-relaxed italic">"{s.app}"</p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="scroll-section flex items-center justify-center min-h-screen px-6 py-20 border-b border-white/5 relative overflow-hidden">
                <div className="card-section-sectors w-full max-w-4xl bg-gradient-to-br from-bg-card to-[#0d1b2a] p-8 md:p-16 rounded-3xl border border-brand-blue/20 shadow-[0_0_50px_rgba(19,127,236,0.1)] transform-origin-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-6 text-center">Integração das Áreas</h3>
                    <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 text-center">
                        Não dá para jogar sozinho no Reino. Todas essas frentes precisam estar orquestradas e rodar em união. Por exemplo:
                    </p>
                    <ul className="space-y-6 text-text-secondary text-lg">
                        <li className="flex gap-4 items-start">
                            <div className="mt-2 w-2 h-2 rounded-full bg-brand-blue shrink-0"></div>
                            <span className="leading-relaxed"><strong className="text-white">Na produção:</strong> A equipe de <strong className="text-brand-blue">Filmagem</strong> grava um testemunho de vida, o <strong className="text-brand-blue">Designer</strong> monta uma capa atrativa, o <strong className="text-brand-blue">Redator</strong> escreve uma legenda com bons gatilhos, e o <strong className="text-brand-blue">Social Media</strong> engaja com a galera que comentar.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="mt-2 w-2 h-2 rounded-full bg-brand-blue shrink-0"></div>
                            <span className="leading-relaxed"><strong className="text-white">No culto:</strong> Enquanto a <strong className="text-brand-blue">Galera do Som</strong> afina a mixagem, a <strong className="text-brand-blue">Transmissão</strong> puxa o sinal, a <strong className="text-brand-blue">Iluminação</strong> traz a atmosfera certa, e a <strong className="text-brand-blue">Tecnologia</strong> garante que a internet suporte a maratona. Um verdadeiro corpo em movimento!</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Sectors;
