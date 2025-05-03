import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.epistemic-note {
    font-size: 0.8em;
    color: var(--gray);
    padding-top: 0.5rem;
    border-top: 1px dashed var(--lightgray);
}

@font-face {
    font-family: 'Truetypewriter PolyglOTT';
    src: url('/static/fonts/TruetypewriterPolyglOTT.woff2') format('woff2'),
         url('/static/fonts/TruetypewriterPolyglOTT.woff') format('woff'),
         url('/static/fonts/TruetypewriterPolyglOTT.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'KJV1611';
    src: url('/static/fonts/KJV1611.woff2') format('woff2'),
         url('/static/fonts/KJV1611.woff') format('woff'),
         url('/static/fonts/KJV1611.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gogol';
    src: url('/fonts/gogol_regular.otf');
}

@font-face {
    font-family: 'EBGaramond';
    src: url('/fonts/EBGaramond.ttf');
}


@font-face {
    font-family: 'LaBelleAurore';
    src: url('/fonts/LaBelleAurore-Regular.ttf');
}

@font-face {
    font-family: 'UnifrakturCook';
    src: url('/fonts/UnifrakturCook-Bold.ttf');
}

.page-title {
  font-size: 4.35rem;
  
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  font-family: 'KJV1611' !important;
}
  
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
