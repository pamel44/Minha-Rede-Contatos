import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Kauan' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Fernando Xavier'
      descricao='Analista de Marketing Digital (São Paulo). Especializado em SEO e conteúdo. Joga vôlei de areia nas horas vagas. Contato: fernando.xavier@gmail.com | Instagram: @fernando.xavier | Telefone: (11) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Aline Ferreira'
      descricao='Odontologista Pediátrica (Porto Alegre/RS). Clínica própria e foco em prevenção. Coleciona quadrinhos. Contato: aline.ferreira@gmail.com | Instagram: @aline.ferreira | Telefone: (51) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Bernardo Mattos'
      descricao='Engenheiro de Software (Recife/PE). Trabalha com inteligência artificial. É praticante de Capoeira. Contato: bernardo.mattos@gmail.com | Instagram: @bernardo.mattos | Telefone: (81) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Camila Mendes'
      descricao='Corretora de Seguros (Belo Horizonte/MG). Especializada em seguro de vida. Adora trilhas e montanhas. Contato: camila.mendes@gmail.com | Instagram: @camila.mendes | Telefone: (31) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='David Reis'
      descricao='Cenógrafo de Teatro (Rio de Janeiro). Criação de palcos e figurinos para grandes espetáculos. Contato: david.reis@gmail.com | Instagram: @david.reis | Telefone: (21) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Elisa Godoy'
      descricao='Terapeuta Ocupacional (Curitiba/PR). Foco em reabilitação de idosos. Cultiva bonsais. Contato: elisa.godoy@gmail.com | Instagram: @elisa.godoy | Telefone: (41) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Gabriel Ramos'
      descricao='Geólogo (Salvador/BA). Pesquisa recursos minerais na região Nordeste. Gosta de mergulho. Contato: gabriel.ramos@gmail.com | Instagram: @gabriel.ramos | Telefone: (71) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Hélio Souza'
      descricao='Técnico em Eletrotécnica (Campinas/SP). Trabalha com painéis solares e energia renovável. Contato: helio.souza@gmail.com | Instagram: @helio.souza | Telefone: (19) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Iara Lima'
      descricao='Veterinária (Florianópolis/SC). Especializada em animais exóticos. É nadadora master. Contato: iara.lima@gmail.com | Instagram: @iara.lima | Telefone: (48) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Jonas Mendes'
      descricao='Gestor de Projetos (Manaus/AM). Foco em projetos de sustentabilidade na Amazônia. Contato: jonas.mendes@gmail.com | Instagram: @jonas.mendes | Telefone: (92) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Karina Nobre'
      descricao='Consultora de RH (São Paulo). Atua com diversidade e inclusão. Coleciona antiguidades. Contato: karina.nobre@gmail.com | Instagram: @karina.nobre | Telefone: (11) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Luan Pereira'
      descricao='Escritor e Roteirista (Brasília/DF). Publicou 3 romances de ficção científica. Contato: luan.pereira@gmail.com | Instagram: @luan.pereira | Telefone: (61) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Mirella Guedes'
      descricao='Nutricionista (Niterói/RJ). Especialista em dietas vegetarianas. Dá aulas de dança de salão. Contato: mirella.guedes@gmail.com | Instagram: @mirella.guedes | Telefone: (21) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Nícolas Oliveira'
      descricao='Físico (São Carlos/SP). Pesquisador na área de materiais supercondutores. Contato: nicolas.oliveira@gmail.com | Instagram: @nicolas.oliveira | Telefone: (16) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Olívia Costa'
      descricao='Produtora Audiovisual (Recife/PE). Foco em documentários culturais do Nordeste. Contato: olivia.costa@gmail.com | Instagram: @olivia.costa | Telefone: (81) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Pablo Rocha'
      descricao='Chef de Pastelaria (Rio de Janeiro). Confeitaria francesa e doces autorais. Contato: pablo.rocha@gmail.com | Instagram: @pablo.rocha | Telefone: (21) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Quênia Santos'
      descricao='Professora Universitária (Campinas/SP). Leciona Sociologia. Faz cerâmica artesanal. Contato: queria.santos@gmail.com | Instagram: @quenia.santos | Telefone: (19) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Rafael Brito'
      descricao='Técnico em Informática (Porto Alegre/RS). Especialista em hardware e manutenção. Gosta de jogos de tabuleiro. Contato: rafael.brito@gmail.com | Instagram: @rafael.brito | Telefone: (51) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Simone Álvares'
      descricao='Economista (São Paulo). Atua no mercado financeiro e análise de risco. Pratica corrida de rua. Contato: simone.alvares@gmail.com | Instagram: @simone.alvares | Telefone: (11) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Túlio Mendes'
      descricao='Arqueólogo (Nordeste). Pesquisa civilizações pré-colombianas. Contato: tulio.mendes@gmail.com | Instagram: @tulio.mendes | Telefone: (85) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Ursula Viana'
      descricao='Tatuadora Artística (Curitiba/PR). Especializada em blackwork e temas botânicos. Contato: ursula.viana@gmail.com | Instagram: @ursula.viana | Telefone: (41) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Victor Hugo'
      descricao='Analista de Suprimentos (Maceió/AL). Foco em logística e negociação com fornecedores. Contato: victor.hugo@gmail.com | Instagram: @victor.hugo | Telefone: (82) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Wallace Castro'
      descricao='Designer de Interiores (Belo Horizonte). Especialista em espaços funcionais e minimalistas. Contato: wallace.castro@gmail.com | Instagram: @wallace.castro | Telefone: (31) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Xenia Reis'
      descricao='Biomédica (Florianópolis/SC). Trabalha em laboratório de análises clínicas. Pratica escalada. Contato: xenia.reis@gmail.com | Instagram: @xenia.reis | Telefone: (48) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Yuri Fontes'
      descricao='Gerente de Vendas (São Paulo). Liderança de equipes e foco em metas. Gosta de culinária oriental. Contato: yuri.fontes@gmail.com | Instagram: @yuri.fontes | Telefone: (11) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Zélia Pires'
      descricao='Fonoaudióloga (Brasília/DF). Atendimento a músicos e cantores profissionais. Contato: zelia.pires@gmail.com | Instagram: @zelia.pires | Telefone: (61) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Álvaro Dias'
      descricao='Publicitário (Rio de Janeiro). Diretor de arte em agência. Coleciona action figures. Contato: alvaro.dias@gmail.com | Instagram: @alvaro.dias | Telefone: (21) 99999-9994'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Beatriz Souza'
      descricao='Professora de Artes (Olinda/PE). Ateliê de pintura e esculturas. Contato: beatriz.souza@gmail.com | Instagram: @beatriz.souza | Telefone: (81) 99999-9994'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Cássio Leal'
      descricao='Técnico em Segurança do Trabalho (Santos/SP). Foco em construção civil e treinamento. Contato: cassio.leal@gmail.com | Instagram: @cassio.leal | Telefone: (13) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Débora Félix'
      descricao='Produtora Cultural (Salvador/BA). Organização de festivais de música e arte. Contato: debora.felix@gmail.com | Instagram: @debora.felix | Telefone: (71) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Eduardo Costa'
      descricao='Engenheiro Mecânico (Porto Alegre/RS). Trabalha na indústria automobilística. É ciclista amador. Contato: eduardo.costa@gmail.com | Instagram: @eduardo.costa | Telefone: (51) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Fabiana Lima'
      descricao='Psicóloga Organizacional (São Paulo). Focada em clima e desenvolvimento de líderes. Contato: fabiana.lima@gmail.com | Instagram: @fabiana.lima | Telefone: (11) 99999-9994'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Gilberto Nunes'
      descricao='Farmacêutico (Curitiba/PR). Atua em pesquisa e desenvolvimento de medicamentos. Contato: gilberto.nunes@gmail.com | Instagram: @gilberto.nunes | Telefone: (41) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Helena Cruz'
      descricao='Assistente Administrativa (Campinas/SP). Especialista em gestão de documentos. Gosta de jardinagem. Contato: helena.cruz@gmail.com | Instagram: @helena.cruz | Telefone: (19) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Igor Ribeiro'
      descricao='Advogado Tributário (Belo Horizonte/MG). Consultoria para grandes empresas. Pratica tiro esportivo. Contato: igor.ribeiro@gmail.com | Instagram: @igor.ribeiro | Telefone: (31) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Janaína Alves'
      descricao='Comissária de Bordo (Rio de Janeiro). Voos internacionais. Estuda idiomas. Contato: janaina.alves@gmail.com | Instagram: @janaina.alves | Telefone: (21) 99999-9993'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Kevin Mattos'
      descricao='Analista de Dados Sênior (São Paulo). Usa R e Machine Learning. Foco em saúde pública. Contato: kevin.mattos@gmail.com | Instagram: @kevin.mattos | Telefone: (11) 99999-9993'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Leticia Sales'
      descricao='Decoradora de Festas (Recife/PE). Eventos temáticos e casamentos. Contato: leticia.sales@gmail.com | Instagram: @leticia.sales | Telefone: (81) 99999-9993'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Márcio Dantas'
      descricao='Eletricista Residencial (Florianópolis/SC). Foca em automação predial. Gosta de pescar em rios. Contato: marcio.dantas@gmail.com | Instagram: @marcio.dantas | Telefone: (48) 99999-9996'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Norma Freitas'
      descricao='Biblioteconomista (Brasília/DF). Trabalha com digitalização e preservação de acervos. Contato: norma.freitas@gmail.com | Instagram: @norma.freitas | Telefone: (61) 99999-9995'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Osvaldo Gomes'
      descricao='Professor de Yoga e Meditação (Chapada Diamantina/BA). Retiros de bem-estar. Contato: osvaldo.gomes@gmail.com | Instagram: @osvaldo.gomes | Telefone: (77) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Priscila Neves'
      descricao='Tradutora Juramentada (Rio de Janeiro). Inglês e Alemão. Adora ópera. Contato: priscila.neves@gmail.com | Instagram: @priscila.neves | Telefone: (21) 99999-9992'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Quirino Silveira'
      descricao='Agente de Viagens (São Paulo). Especialista em roteiros de aventura (África/Ásia). Contato: quirino.silveira@gmail.com | Instagram: @quirino.silveira | Telefone: (11) 99999-9992'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Renato Félix'
      descricao='Técnico em Radiologia (Bauru/SP). Atua em hospital privado. Gosta de fotografia noturna. Contato: renato.felix@gmail.com | Instagram: @renato.felix | Telefone: (14) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Solange Ramos'
      descricao='Estilista (Porto Alegre/RS). Focada em moda sustentável e upcycling. Contato: solange.ramos@gmail.com | Instagram: @solange.ramos | Telefone: (51) 99999-9994'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Tadeu Xavier'
      descricao='Piloto de Drone (Goiânia/GO). Mapeamento aéreo para agricultura. Contato: tadeu.xavier@gmail.com | Instagram: @tadeu.xavier | Telefone: (62) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Ulisses Martins'
      descricao='Professor de Educação Física (Vitória/ES). Treinamento funcional e corrida. É surfista de longboard. Contato: ulisses.martins@gmail.com | Instagram: @ulisses.martins | Telefone: (27) 99999-9998'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Valéria Naves'
      descricao='Jornalista (Curitiba/PR). Cobre o setor de tecnologia e inovação. Contato: valeria.naves@gmail.com | Instagram: @valeria.naves | Telefone: (41) 99999-9994'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Washington Santos'
      descricao='Mecânico de Aeronaves (Manaus/AM). Manutenção de aviões de pequeno porte. Gosta de acampamentos. Contato: washington.santos@gmail.com | Instagram: @washington.santos | Telefone: (92) 99999-9997'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Yara Leal'
      descricao='Desenvolvedora Front-End (Belo Horizonte/MG). Especialista em React e UI/UX. Contato: yara.leal@gmail.com | Instagram: @yara.leal | Telefone: (31) 99999-9994'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Zackary Costa'
      descricao='Chef de Cozinha (Florianópolis/SC). Especializado em frutos do mar e culinária açoriana. Contato: zackary.costa@gmail.com | Instagram: @zackary.costa | Telefone: (48) 99999-9995'
      img='perfil01'
    />

  </ScrollView>
}