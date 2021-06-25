// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicHome } from "./plasmic/canvas_app_explorer/PlasmicHome";
import ProductCard from "../../ProductCard"; // plasmic-import: zc_-JZqmkLhAk/component
import Screenshot from "../../Screenshot"; // plasmic-import: fUpKi24Qhx/component

async function Home_(props, ref) {
  // Use PlasmicHome to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHome are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all HomeProps here, but feel free
  // to do whatever works for you.
  
  // Fetch json data from /api/lti_tools/
  const url = "http://localhost:5000/api/lti_tools/"
	let tools = new Array ();
  for (let i = 0; i < 4; i++) {
    const response = await fetch(url);
    const data = await response.json();
		let obj = JSON.parse(data)
		tools.push(obj)
	}	
	
	// Add each card to the webpage
	props.push({
		productCardContainer={ //Name (productCardContainer) is on Plasmic Design not pushed
			children: tools.map(tool => ( //Not sure if this should be called children or something else
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
				</ProductCard> //Learn More is not a component in the current version of plasmic so can't add it
			))
		}
	})

	
  return <PlasmicHome root={{ ref }} {...props} />;
}

const Home = React.forwardRef(Home_);

export default Home;
