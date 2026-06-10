import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import documento from "./assets/img/documento.png";
import { LuFolderGit2 } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { LuSquareDashed } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import { PiClipboardTextBold } from "react-icons/pi";
import { GrAlert } from "react-icons/gr";
import { LuScanEye } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <div className="home">

      <Header />

      {/* seção 1 */}
      <section className="fundoverde">
        <div className="row">

          <div className="col-6 div-col-home">
            <div className="div-texto">
              <p className="text-branco">Verifique a autenticidade de documentos com <p className="text-subli">Inteligência Artificial</p></p>
            </div>
          </div>

          <div className="col-6 div-col-home2">
            <div className="div-imgdoc">
              <img src={documento} alt="Documento" />
            </div>
          </div>

        </div>
      </section>

      {/* seção 2 - cards */}
      <section className="container">
        <div className="cards-home">
          <div className="card-home">
            <div className="icardhome"><LuFolderGit2 /></div>
            <h2>Não sei oq</h2>
            <p>qualquer coisa</p>
          </div>

          <div className="card-home card-destaque">
            <div className="icardhome"><LuFolderGit2 /></div>
            <h2>Não sei oq</h2>
            <p>qualquer coisa</p>
          </div>

          <div className="card-home">
            <div className="icardhome"><LuFolderGit2 /></div>
            <h2>Não sei oq</h2>
            <p>qualquer coisa</p>
          </div>
        </div>
      </section>

      {/* seção 3 - como funciona */}
      <section className="container como-funciona">
        <h2 className="titulos-home">Como funciona?</h2>
        <p>Processo simples e eficiente em apenas 4 etapas</p>

        <div className="cards-home-func">
          <div className="card-etapas">
            <div className="icardhome2"><LuDownload /></div>
            <h3>Uploud do documento</h3>
            <p>Faça upload do documento que deseja verificar de forma rápida e segura</p>
          </div>

          <div className="card-etapas">
            <div className="icardhome2"><LuSquareDashed /></div>
            <h3>Análise pixel por pixel</h3>
            <p>Detecção de manipulações através de análise microscópica de pixels</p>
          </div>

          <div className="card-etapas">
            <div className="icardhome2"><TbShieldSearch /></div>
            <h3>Detecção de manipulação</h3>
            <p>Identificamos alterações, adulterações e inconsistências no documento</p>
          </div>

          <div className="card-etapas">
            <div className="icardhome2"><PiClipboardTextBold /></div>
            <h3>Geração de relatório</h3>
            <p>Receba um relatório completo e detalhado sobre a autenticidade do documento</p>
          </div>
        </div>

      </section>

      {/* seção 4 - funcionalidades */}
      <section className="container">
        <h2 className="titulos-home">Funcionalidades</h2>

        <div className="cards-funcionalidades">

          <div className="card-funcionalidades">
            <div className="texto-card-funci">
              <h2>Verificação de autenticidade</h2>
              <p>Análise profunda para identificar documentos fraudulentos ou alterados</p>
            </div>

            <div className="icon-card-funci"><GrAlert /></div>
          </div>

          <div className="card-funcionalidades">
            <div className="texto-card-funci">
              <h2>Análise de pixels</h2>
              <p>Detecção de manipulações através de análise de pixels</p>
            </div>

            <div className="icon-card-funci"><LuScanEye /></div>
          </div>

          <div className="card-funcionalidades">
            <div className="texto-card-funci">
              <h2>Relatórios detalhados</h2>
              <p>Documentação completa com evidências visuais e técnicas</p>
            </div>

            <div className="icon-card-funci"><CgFileDocument /></div>
          </div>

          <div className="card-funcionalidades">
            <div className="texto-card-funci">
              <h2>Segurança e privacidade</h2>
              <p>Documentos são processados com criptografia de ponta a ponta</p>
            </div>

            <div className="icon-card-funci"><MdOutlineSecurity /></div>
          </div>

        </div>
      </section>

      {/* seção 5 - público-alvo  */}
      <section className="container publico-alvo">
        <h2 className="titulos-home">Público-Alvo</h2>
        <p>Nossa plataforma atende diversos segmentos que necessitam de verificação confiável de documentos</p>
      </section>

      <section className="fundoverdeclaro">
        <div className="cards-home2 container">
          <div className="card-home cardhome2">
            <div className="icardhome"><PiBuildingApartment /></div>
            <h2>Empresas</h2>
            <p>Validação de documentos de fornecedores, parceiros e clientes</p>
            
            <div className="exemplos-doc">
              <div className="exemplo-doc">Contrato</div>
              <div className="exemplo-doc">Notas fiscais</div>
              <div className="exemplo-doc">Certidões</div>
            </div>
          </div>

          <div className="card-home card-destaque cardhome2">
            <div className="icardhome"><TbSchool /></div>
            <h2>Instituições de ensino</h2>
            <p>Verificação de certificados, diplomas e históricos escolares</p>

            <div className="exemplos-doc">
              <div className="exemplo-doc">Diplomas</div>
              <div className="exemplo-doc">Certificados</div>
              <div className="exemplo-doc">Históricos</div>
            </div>
          </div>

          <div className="card-home cardhome2">
            <div className="icardhome"><HiOutlinePencilSquare /></div>
            <h2>RH e Recrutamento</h2>
            <p>Conferência de documentação de candidatos e colaboradores</p>

            <div className="exemplos-doc">
              <div className="exemplo-doc">Currículos</div>
              <div className="exemplo-doc">Certidões</div>
              <div className="exemplo-doc">Atestados</div>
            </div>
          </div>
        </div>
      </section>

      {/* seção 6 */}
      <section className="fundoverde2 secverificardoc">

        <h1>Proteja-se contra fraudes documentais com <h1 className="text-subli2">tecnologia de ponta</h1></h1>
        <p>Junte-se a milhares de empresas e usuários que confiam em nossa plataforma para garantir a autenticidade de seus documentos</p>

        <div className="btn-verfi1doc">
          <Link to="/">Verificar meu primeiro documento</Link>
          <FaArrowRight />
        </div>

      </section>

      <Footer />

    </div>

  );
}

export default Home;