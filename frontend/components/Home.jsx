// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { useState, useEffect } from "react";
import { PlasmicHome } from "./plasmic/canvas_app_explorer/PlasmicHome";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "./Header"; // plasmic-import: rgvwcoUrD14Pp/component
import ProductCard from "./ProductCard"; // plasmic-import: zc_-JZqmkLhAk/component
import Ratings from "./Ratings"; // plasmic-import: kZJnDl5cN7jJ7/component
import AddRemoveButton from "./AddRemoveButton"; // plasmic-import: JyIyDBiGW-/component
import Screenshot from "./Screenshot"; // plasmic-import: fUpKi24Qhx/component
import Footer from "./Footer"; // plasmic-import: SxuS7aSzfTV9l/component
import { useScreenVariants } from "./plasmic/canvas_app_explorer/PlasmicGlobalVariant__Screen"; // plasmic-import: thj0p9NXEH81i/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "./plasmic/plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic/canvas_app_explorer/plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./plasmic/canvas_app_explorer/PlasmicHome.css"; // plasmic-import: 4XPgsAhljqdds/css

export const Home__VariantProps = new Array();

export const Home__ArgProps = new Array();

//   return <PlasmicHome root={{ ref }} {...props} />;

/*async function FetchData() {
	// Fetch json data from /api/lti_tools/
	const url = "http://localhost:5000/api/lti_tools/";  
	let tools = new Array ();
	const response = await fetch(url);
	const data = await response.json();
	data.forEach(obj => {
		tools.push(obj);
	})
    return tools;
} */

function Home__RenderFunc(props,ref) {  
    const [tools, setTools] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:5000/api/lti_tools/";
        const response = await fetch(url);
        const data = await response.json();
        setTools(data)
    }, []);

	// Fetch json data
	//let tools = FetchData();
    console.log(tools)
	const { variants, args, overrides, forNode, dataFetches } = props;
	const globalVariants = ensureGlobalVariants({
		screen: useScreenVariants()
	});

	return (
		<React.Fragment>
			<div className={"plasmic_page_wrapper"}>
				<div
					data-plasmic-name={"root"}
					data-plasmic-override={overrides.root}
					data-plasmic-root={true}
					data-plasmic-for-node={forNode}
					className={classNames(
						"plasmic_default__all",
						"plasmic_default__div",
						"root_reset_mXv5TZ5SUPGRneH9RoMn6q",
						"Home__root__rfWi8"
					)}
				>
					{false ? (
						<input
							className={classNames(
								"plasmic_default__all",
								"plasmic_default__input",
								"Home__textbox__kcHjj"
							)}
							placeholder={"Some placeholder"}
							size={1}
							type={"text"}
							value={"Some value"}
						/>
					) : null}

					<div
						data-plasmic-name={"appContainer"}
						data-plasmic-override={overrides.appContainer}
						className={classNames(
							"plasmic_default__all",
							"plasmic_default__div",
							"Home__appContainer___8LuQk"
						)}
					>
						<Header
							data-plasmic-name={"header"}
							data-plasmic-override={overrides.header}
							className={classNames("__wab_instance", "Home__header__iXzGr")}
							withSearchBar={"withSearchBar"}
						/>

						{false ? (
							<input
								className={classNames(
									"plasmic_default__all",
									"plasmic_default__input",
									"Home__textbox__y0QeV"
								)}
								placeholder={"Some placeholder"}
								size={1}
								type={"text"}
								value={"Some value"}
							/>
						) : null}

						<div
							data-plasmic-name={"caeDescriptionContainer"}
							data-plasmic-override={overrides.caeDescriptionContainer}
							className={classNames(
								"plasmic_default__all",
								"plasmic_default__div",
								"Home__caeDescriptionContainer__d20ZQ"
							)}
						>
							<div
								className={classNames(
									"plasmic_default__all",
									"plasmic_default__div",
									"__wab_text",
									"Home__box__k3LxN"
								)}
							>
								{
									"Canvas App Explorer is a collection of resources to assist the instructor in using the best tools available for you and your students. "
								}
							</div>
						</div>

						<p.Stack
							as={"div"}
							data-plasmic-name={"productCardContainer"}
							data-plasmic-override={overrides.productCardContainer}
							hasGap={true}
							className={classNames(
								"plasmic_default__all",
								"plasmic_default__div",
								"Home__productCardContainer___92DMt"
							)}
						>
							{/*tools.map(tool => {
								<ProductCard
									className={classNames(
										"__wab_instance",	
									)}
									description={
										<div
											className={classNames(
												"plasmic_default__all",
												"plasmic_default__div",
												"__wab_text",
											)}
										>    
											{tool.name}
                                            console.log(tool.name)
										</div>
									}
									image={
										<img
											alt={""}
											className={classNames(
												"plasmic_default__all",
												"plasmic_default__img",
											)}
											role={"img"}
											src={tool.main_image} // Image not currently in API?
										/>
									}
									logo={
										<img
											alt={""}
											className={classNames(
												"plasmic_default__all",
												"plasmic_default__img",
											)}
											role={"img"}
											src={tool.logo_image}
										/>
									}
									title={tool.name}
								>
									<AddRemoveButton
										className={classNames(
											"__wab_instance",
										)}
									/>
								</ProductCard>
                            })*/}    
							<ProductCard
								data-plasmic-name={"zoomCard"}
								data-plasmic-override={overrides.zoomCard}
								className={classNames(
									"__wab_instance",
									"Home__zoomCard__foQyr"
								)}
								description={
									<div
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__div",
											"__wab_text",
											"Home__box__c1Y5M"
										)}
									>
										{tools[0].long_description}
									</div>
								}
								image={
									<img
										alt={""}
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__img",
											"Home__img__zw5Ho"
										)}
										role={"img"}
										src={
											"/static/plasmic/canvas_app_explorer/images/zoomMeetingpng.png"
										}
									/>
								}
								learnMore={"learnMore"}
								logo={
									<img
										alt={""}
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__img",
											"Home__img__zZtPf"
										)}
										role={"img"}
										src={
											"/static/plasmic/canvas_app_explorer/images/zoomLogo.png"
										}
									/>
								}
								ratings={
									<Ratings
										className={classNames(
											"__wab_instance",
											"Home__ratings__yXulX"
										)}
										numReviews={"(45 Review)"}
										stars={"four"}
									/>
								}
								title={"Zoom"}
							>
								<AddRemoveButton
									className={classNames(
										"__wab_instance",
										"Home__addRemoveButton___3D93M"
									)}
								/>
							</ProductCard>

							<ProductCard
								data-plasmic-name={"myLaCard"}
								data-plasmic-override={overrides.myLaCard}
								className={classNames(
									"__wab_instance",
									"Home__myLaCard__gpGZx"
								)}
								description={
									<div
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__div",
											"__wab_text",
											"Home__box__jl7El"
										)}
									>
										{
											"Dashboard that provides students with information about engagement with course."
										}
									</div>
								}
								image={
									<img
										alt={""}
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__img",
											"Home__img__psMY"
										)}
										role={"img"}
										src={
											"/static/plasmic/canvas_app_explorer/images/myLearningAnalytics.png"
										}
									/>
								}
								logo={
									<img
										alt={""}
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__img",
											"Home__img__u0Ib1"
										)}
										role={"img"}
										src={
											"/static/plasmic/canvas_app_explorer/images/myLaLogo.png"
										}
									/>
								}
								ratings={
									true ? (
										<Ratings
											className={classNames(
												"__wab_instance",
												"Home__ratings__iUUiJ"
											)}
											numReviews={"(45 Review)"}
											stars={"five"}
										/>
									) : null
								}
								title={"My Learning Analytics"}
							>
								<AddRemoveButton
									className={classNames(
										"__wab_instance",
										"Home__addRemoveButton__bH9Sb"
									)}
								/>
							</ProductCard>

							<ProductCard
								data-plasmic-name={"piazzaCard"}
								data-plasmic-override={overrides.piazzaCard}
								className={classNames(
									"__wab_instance",
									"Home__piazzaCard___71L95"
								)}
								description={
									<div
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__div",
											"__wab_text",
											"Home__box__qBpZp"
										)}
									>
										{
											"Class discussion/Q&A site with link to course navigation for Piazza discussions."
										}
									</div>
								}
								image={
									<img
										alt={""}
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__img",
											"Home__img__fApwR"
										)}
										role={"img"}
										src={
											"/static/plasmic/canvas_app_explorer/images/piazzainstructorpostpng.png"
										}
									/>
								}
								logo={
									<img
										alt={""}
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__img",
											"Home__img__eqcPf"
										)}
										role={"img"}
										src={
											"/static/plasmic/canvas_app_explorer/images/piazzaLogo.png"
										}
									/>
								}
								ratings={
									<Ratings
										className={classNames(
											"__wab_instance",
											"Home__ratings___14DWe"
										)}
										numReviews={"(45 Review)"}
										stars={"five"}
									/>
								}
								title={"Piazza"}
							>
								<AddRemoveButton
									className={classNames(
										"__wab_instance",
										"Home__addRemoveButton___6ByWv"
									)}
									removeToolFromSite={"removeToolFromSite"}
								/>
							</ProductCard>

							<ProductCard
								data-plasmic-name={"panoptoCard"}
								data-plasmic-override={overrides.panoptoCard}
								className={classNames(
									"__wab_instance",
									"Home__panoptoCard__cv5Of"
								)}
								description={
									<div
										className={classNames(
											"plasmic_default__all",
											"plasmic_default__div",
											"__wab_text",
											"Home__box__p0Nci"
										)}
									>
										{"Panopto is used to record, share and manage videos."}
									</div>
								}
								title={"Panopto"}
							/>
						</p.Stack>

						{true ? (
							<Footer
								data-plasmic-name={"footer"}
								data-plasmic-override={overrides.footer}
								className={classNames("__wab_instance", "Home__footer__sUgvZ")}
							/>
						) : null}
					</div>

					{false ? (
						<input
							className={classNames(
								"plasmic_default__all",
								"plasmic_default__input",
								"Home__textbox__triAl"
							)}
							placeholder={"Some placeholder"}
							size={1}
							type={"text"}
							value={"Some value"}
						/>
					) : null}
				</div>
			</div>
		</React.Fragment>
	);
};    

//const Home = React.forwardRef(Home_);

const PlasmicDescendants = {
  root: [
    "root",
    "appContainer",
    "header",
    "caeDescriptionContainer",
    "productCardContainer",
    "zoomCard",
    "myLaCard",
    "piazzaCard",
    "panoptoCard",
    "footer"
  ],

  appContainer: [
    "appContainer",
    "header",
    "caeDescriptionContainer",
    "productCardContainer",
    "zoomCard",
    "myLaCard",
    "piazzaCard",
    "panoptoCard",
    "footer"
  ],

  header: ["header"],
  caeDescriptionContainer: ["caeDescriptionContainer"],
  productCardContainer: [
    "productCardContainer",
    "zoomCard",
    "myLaCard",
    "piazzaCard",
    "panoptoCard"
  ],

  zoomCard: ["zoomCard"],
  myLaCard: ["myLaCard"],
  piazzaCard: ["piazzaCard"],
  panoptoCard: ["panoptoCard"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: Home__ArgProps,
      internalVariantPropNames: Home__VariantProps
    });

    const { dataFetches } = props;
    return Home__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Home";
  } else {
    func.displayName = `Home.${nodeName}`;
  }
  return func;
}

export const Home = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    appContainer: makeNodeComponent("appContainer"),
    header: makeNodeComponent("header"),
    caeDescriptionContainer: makeNodeComponent("caeDescriptionContainer"),
    productCardContainer: makeNodeComponent("productCardContainer"),
    zoomCard: makeNodeComponent("zoomCard"),
    myLaCard: makeNodeComponent("myLaCard"),
    piazzaCard: makeNodeComponent("piazzaCard"),
    panoptoCard: makeNodeComponent("panoptoCard"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: Home__VariantProps,
    internalArgProps: Home__ArgProps
  }
);

export default Home;
