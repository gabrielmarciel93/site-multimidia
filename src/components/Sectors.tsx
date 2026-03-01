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
        gsap.from('.sector-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section id="sectors" ref={container} className="py-24 px-6 lg:px-20 bg-black/40 min-h-screen border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center reveal-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">As Vertentes da <span className="text-brand-blue">Multimídia</span></h2>
                    <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
                        A área de Multimídia é responsável por integrar tecnologia e recursos audiovisuais para enriquecer os cultos, melhorar a comunicação e engajar a comunidade. Um setor de multimídia geralmente funciona com as seguintes vertentes:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {sectorsData.map((s) => (
                        <div key={s.id} className="sector-item bg-bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand-blue/50 transition-colors duration-300 flex flex-col gap-4">
                            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                                    <s.icon size={28} />
                                </div>
                                <h3 className="text-white text-2xl font-bold">{s.id}. {s.title}</h3>
                            </div>
                            <div>
                                <strong className="text-white">Como funciona:</strong>
                                <p className="text-text-secondary text-base leading-relaxed mt-1 mb-3">{s.func}</p>
                                <strong className="text-white">Exemplo de aplicação:</strong>
                                <p className="text-text-secondary text-base leading-relaxed mt-1">{s.app}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-brand-blue/20 to-transparent p-8 rounded-2xl border border-brand-blue/20 sector-item">
                    <h3 className="text-2xl font-bold text-white mb-4">Integração das Áreas</h3>
                    <p className="text-text-secondary text-lg leading-relaxed mb-4">
                        Não dá para jogar sozinho no Reino. Todas essas frentes precisam estar orquestradas e rodar em união. Por exemplo:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-text-secondary text-base">
                        <li>A equipe de <strong className="text-white">Filmagem</strong> grava um testemunho de vida, o <strong className="text-white">Designer</strong> monta uma capa atrativa, o <strong className="text-white">Redator</strong> escreve uma legenda com bons gatilhos, e o <strong className="text-white">Social Media</strong> engaja com a galera que comentar.</li>
                        <li>Durante o culto, a <strong className="text-white">Galera do Som</strong> afina a mixagem, a <strong className="text-white">Transmissão</strong> puxa o sinal, a <strong className="text-white">Iluminação</strong> traz a atmosfera certa, e a <strong className="text-white">Tecnologia</strong> garante que a internet suporte a maratona. Um verdadeiro corpo em movimento!</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sectors;
