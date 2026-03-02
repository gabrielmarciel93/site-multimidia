import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContentTransmissao = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // We select each individual section card to pin and scale
        const cards = gsap.utils.toArray('.card-section') as HTMLElement[];

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
        <div ref={container} className="bg-gradient-to-br from-black to-[var(--color-bg-dark)]">
            <section id="transmissao" className="scroll-section py-24 px-6 lg:px-20 min-h-screen border-b border-white/5 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        O que é <span className="text-brand-blue">transmissão</span> para você?
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        A transmissão de cultos e eventos religiosos virou praticamente a porta de entrada das igrejas modernas, sendo essencial para alcançar quem está longe, e também nutrir a própria comunidade nesse mundo digitalizado. Dá uma olhada nos componentes principais da transmissão:
                    </p>
                </div>
            </section>

            {[
                { id: 'transmissao-1', title: '1. A Importância da Transmissão (Live)', items: ['Alcance Global: Permite que a igreja jogue para fora do estádio, alcançando pessoas em outros estados ou países.', 'Acessibilidade Inclusiva: Acolhe quem está fisicamente impedido (idosos, doentes crônicos ou cadeirantes em dias de forte chuva).', 'Engajamento Contínuo: Mantém a fogueira acesa até mesmo durante pandemias, viagens ou intempéries climáticas.', 'Missão Evangelística: Ajuda a plantar a mensagem na tela do celular de novos públicos, de forma orgânica.'] },
                { id: 'transmissao-2', title: '2. Plataformas de Transmissão', items: ['YouTube: O "rei" do formato. Excelente para a live oficial e ótimo como biblioteca de vídeos permanentes por ser o maior buscador do gênero.', 'Facebook Live: Permite muita interação em tempo real, atingindo um público muito engajado na rede.', 'Instagram Live: Ótimo para transmissões mais informais, bate-papos com a liderança ou eventos menores.', 'Zoom: A pedida certa para reuniões menores, discipulados ou estudos bíblicos onde a galera participa falando e interagindo diretamente.', 'Plataformas Especializadas: Como Subsplash, Church Online Platform ou Vimeo, que oferecem ferramentas muito específicas de interação e estabilidade para a igreja.'] },
                { id: 'transmissao-3', title: '3. Equipamentos Necessários (O Arsenal)', items: ['Câmeras: Desde smartphones atualizados até câmeras profissionais (DSLR, Mirrorless, PTZ) para ter aquela captura cinematográfica.', 'Microfones: Lapela pro pastor, microfones de mesa, ou a via master puxada direto da mesa principal de áudio – áudio cristalino é ouro.', 'Iluminação: Refletores ou softboxes. Sem luz adequada, o vídeo fica cheio de "ruídos" na imagem.', 'Computador (Hardware): Um PC capaz de processar e encodar a transmissão simultaneamente.', 'Softwares: OBS Studio, StreamYard ou vMix na transmissão. No telão: o querido Holyrics, ProPresenter, entre outros.'] },
                { id: 'transmissao-4', title: '4. Dicas de Ouro para uma Live Excelente', items: ['Testes Antecipados (Passagem da Live): Verifique equipamentos e internet sempre com antecedência para evitar surpresas.', 'Qualidade de Áudio e Vídeo: Invista o caixa do ministério num bom som antes do vídeo super caro, para evitar chiados de retorno.', 'Interação com o Público: Reserve voluntários no chat apenas para saudar a igreja online e registrar os "Améns" e pedidos de oração.', 'Consistência: Estabeleça horários fixos. Culto em casa precisa ter horário certo na grade de domingo.', 'Conteúdo Integrado: Reforce o impacto usando letterings da passagem bíblica e overlays dinâmicos de nome nas falas.'] },
                { id: 'transmissao-5', title: '5. Os "Perrengues" (Desafios) e Como Resolver', items: ['Conexão de Internet: Link dedicado via cabo (sempre fuja do acesso Wi-Fi partilhado com a congregação).', 'Falta de Recursos (Grana): Monte seu laboratório devagar. Evolua de um smartphone amarrado no tripé em direção às PTZ conforme a fé e o caixa crescerem.', 'Engajamento On-line: Quebre o gelo fazendo enquetes no chat ou orando pelos que enviam seus nomes vivo do altar pra galera on.', 'Direitos Autorais (O Strike): Cuidado redobrado com fundo de louvor de plataformas como Spotify para evitar os bloqueios de DMCA no YouTube.'] },
                { id: 'transmissao-6', title: '6. Benefícios Espirituais e Comunitários', items: ['Fortalecimento da Fé: Alimente a membresia mesmo quando o pneu fura e não dá tempo de chegar ao prédio físico.', 'Unidade Comunitária: Um link que conecta pode manter o acolhimento durante feriados estendidos.', 'Missão Evangelística (Missões urbanas on-line): Aumente as métricas de salvação atingindo quem por timidez jamais entraria na igreja pelo pórtico.'] },
                { id: 'transmissao-7', title: '7. Tendências Futuras', items: ['Realidade Virtual (VR): Como já vemos acontecendo, a possibilidade imersiva nos ambientes digitais simulados através de Metaverso.', 'Inteligência Artificial (IA): Uso brutal em recortes automáticos das mensagens, legendas dinâmicas em alta resolução e dublagem simultânea.', 'Integração Massiva nas Redes Sociais: Omnichannel pulsando numa rede de automações contínua de boas vinda a quem for novo no grupo.'] }
            ].map((sectionData) => (
                <section key={sectionData.id} id={sectionData.id} className="scroll-section flex items-center justify-center min-h-screen px-6 py-20 border-b border-white/5 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                    <div className="card-section w-full max-w-4xl bg-bg-card p-8 md:p-16 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-origin-center">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-6">{sectionData.title}</h3>
                        <ul className="space-y-6 text-text-secondary text-lg md:text-xl">
                            {sectionData.items.map((item, index) => {
                                const [boldPart, rest] = item.split(': ');
                                return (
                                    <li key={index} className="flex gap-4">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-blue shrink-0"></div>
                                        <span><strong className="text-white">{boldPart}:</strong> {rest}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ContentTransmissao;
