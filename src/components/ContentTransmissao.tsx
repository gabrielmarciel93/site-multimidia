import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContentTransmissao = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.reveal-item-trans', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section id="transmissao" ref={container} className="py-24 px-6 lg:px-20 min-h-screen border-b border-white/5 bg-gradient-to-br from-black to-[var(--color-bg-dark)]">
            <div className="max-w-4xl mx-auto">
                <div className="reveal-item-trans mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        O que é <span className="text-brand-blue">transmissão</span> para você?
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        A transmissão de cultos e eventos religiosos virou praticamente a porta de entrada das igrejas modernas, sendo essencial para alcançar quem está longe, e também nutrir a própria comunidade nesse mundo digitalizado. Dá uma olhada nos componentes principais da transmissão:
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">1. A Importância da Transmissão (Live)</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">Alcance Global:</strong> Permite que a igreja jogue para fora do estádio, alcançando pessoas em outros estados ou países.</li>
                            <li><strong className="text-white">Acessibilidade Inclusiva:</strong> Acolhe quem está fisicamente impedido (idosos, doentes crônicos ou cadeirantes em dias de forte chuva).</li>
                            <li><strong className="text-white">Engajamento Contínuo:</strong> Mantém a fogueira acesa até mesmo durante pandemias, viagens ou intempéries climáticas.</li>
                            <li><strong className="text-white">Missão Evangelística:</strong> Ajuda a plantar a mensagem na tela do celular de novos públicos, de forma orgânica.</li>
                        </ul>
                    </div>

                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">2. Plataformas de Transmissão</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">YouTube:</strong> O "rei" do formato. Excelente para a live oficial e ótimo como biblioteca de vídeos permanentes por ser o maior buscador do gênero.</li>
                            <li><strong className="text-white">Facebook Live:</strong> Permite muita interação em tempo real, atingindo um público muito engajado na rede.</li>
                            <li><strong className="text-white">Instagram Live:</strong> Ótimo para transmissões mais informais, bate-papos com a liderança ou eventos menores.</li>
                            <li><strong className="text-white">Zoom:</strong> A pedida certa para reuniões menores, discipulados ou estudos bíblicos onde a galera participa falando e interagindo diretamente.</li>
                            <li><strong className="text-white">Plataformas Especializadas:</strong> Como Subsplash, Church Online Platform ou Vimeo, que oferecem ferramentas muito específicas de interação e estabilidade para a igreja.</li>
                        </ul>
                    </div>

                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">3. Equipamentos Necessários (O Arsenal)</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">Câmeras:</strong> Desde smartphones atualizados até câmeras profissionais (DSLR, Mirrorless, PTZ) para ter aquela captura cinematográfica.</li>
                            <li><strong className="text-white">Microfones:</strong> Lapela pro pastor, microfones de mesa, ou a via master puxada direto da mesa principal de áudio – áudio cristalino é ouro.</li>
                            <li><strong className="text-white">Iluminação:</strong> Refletores ou softboxes. Sem luz adequada, o vídeo fica cheio de "ruídos" na imagem.</li>
                            <li><strong className="text-white">Computador (Hardware):</strong> Um PC capaz de processar e encodar a transmissão simultaneamente.</li>
                            <li><strong className="text-white">Softwares:</strong> OBS Studio, StreamYard ou vMix na transmissão. No telão: o querido Holyrics, ProPresenter, entre outros.</li>
                        </ul>
                    </div>

                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">4. Dicas de Ouro para uma Live Excelente</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">Testes Antecipados (Passagem da Live):</strong> Verifique equipamentos e internet sempre com antecedência para evitar surpresas.</li>
                            <li><strong className="text-white">Qualidade de Áudio e Vídeo:</strong> Invista o caixa do ministério num bom som antes do vídeo super caro, para evitar chiados de retorno.</li>
                            <li><strong className="text-white">Interação com o Público:</strong> Reserve voluntários no chat apenas para saudar a igreja online e registrar os "Améns" e pedidos de oração.</li>
                            <li><strong className="text-white">Consistência:</strong> Estabeleça horários fixos. Culto em casa precisa ter horário certo na grade de domingo.</li>
                            <li><strong className="text-white">Conteúdo Integrado:</strong> Reforce o impacto usando letterings da passagem bíblica e overlays dinâmicos de nome nas falas.</li>
                        </ul>
                    </div>

                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">5. Os "Perrengues" (Desafios) e Como Resolver</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">Conexão de Internet:</strong> Link dedicado via cabo (sempre fuja do acesso Wi-Fi partilhado com a congregação).</li>
                            <li><strong className="text-white">Falta de Recursos (Grana):</strong> Monte seu laboratório devagar. Evolua de um smartphone amarrado no tripé em direção às PTZ conforme a fé e o caixa crescerem.</li>
                            <li><strong className="text-white">Engajamento On-line:</strong> Quebre o gelo fazendo enquetes no chat ou orando pelos que enviam seus nomes vivo do altar pra galera on.</li>
                            <li><strong className="text-white">Direitos Autorais (O Strike):</strong> Cuidado redobrado com fundo de louvor de plataformas como Spotify para evitar os bloqueios de DMCA no YouTube.</li>
                        </ul>
                    </div>

                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">6. Benefícios Espirituais e Comunitários</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">Fortalecimento da Fé:</strong> Alimente a membresia mesmo quando o pneu fura e não dá tempo de chegar ao prédio físico.</li>
                            <li><strong className="text-white">Unidade Comunitária:</strong> Um link que conecta pode manter o acolhimento durante feriados estendidos.</li>
                            <li><strong className="text-white">Missão Evangelística (Missões urbanas on-line):</strong> Aumente as métricas de salvação atingindo quem por timidez jamais entraria na igreja pelo pórtico.</li>
                        </ul>
                    </div>

                    <div className="reveal-item-trans bg-bg-card p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">7. Tendências Futuras</h3>
                        <ul className="list-disc pl-5 space-y-3 text-text-secondary">
                            <li><strong className="text-white">Realidade Virtual (VR):</strong> Como já vemos acontecendo, a possibilidade imersiva nos ambientes digitais simulados através de Metaverso.</li>
                            <li><strong className="text-white">Inteligência Artificial (IA):</strong> Uso brutal em recortes automáticos das mensagens, legendas dinâmicas em alta resolução e dublagem simultânea.</li>
                            <li><strong className="text-white">Integração Massiva nas Redes Sociais:</strong> Omnichannel pulsando numa rede de automações contínua de boas vinda a quem for novo no grupo.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentTransmissao;
