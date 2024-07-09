import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri"

const pageInfo = {
  title: "CNA | Recrutamento",
  description:
    "Junte-se ao time de educadores do CNA! Estamos em busca de professores de inglês qualificados e dedicados.",
  authorName: "CNA",
  slogan: "JÁ SE IMAGINOU FAZENDO PARTE DA FAMÍLIA CNA?",
}

const pagesLinks = {
  home: "https://www.cna.com.br/catalao",
  links: [
    {
      name: "Instituto CNA",
      link: "https://www.institutocna.org",
    },
    {
      name: "Política de privacidade",
      link: "https://www.cna.com.br/politica-de-privacidade",
    },
    {
      name: "Termos de uso",
      link: "https://www.cna.com.br/termos-de-uso",
    },
  ],
}

const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/cnacatalao",
    icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/CNACatalao",
    icon: RiFacebookFill,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@cnacatalao",
    icon: RiTiktokFill,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@CNAORIGINALS",
    icon: RiYoutubeFill,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/cna-idiomas-oficial",
    icon: RiLinkedinFill,
  },
]

const formTexts = {
  name: {
    validate: "Nome obrigatório",
  },
  email: {
    validate: "E-mail inválido",
  },
  phone: {
    regex: /^\(\d{2}\) \d \d{4} \d{4}$/,
    validate: "Número inválido",
  },
  file: {
    validate: {
      required: "Currículo obrigatório",
      size: 5000000,
      sizeText: "O arquivo deve ter no máximo 5MB",
      ACCEPTED_FILE_TYPES: ["image/png", "image/jpeg", "application/pdf"],
      typeFile: "O arquivo deve ser PDF, PNG ou JPEG",
    },
  },
  message: {
    max: 500,
    validate: "Mensagem deve conter no máximo 500 caracteres",
  },
}

export { formTexts, pageInfo, pagesLinks, socialMedia }
