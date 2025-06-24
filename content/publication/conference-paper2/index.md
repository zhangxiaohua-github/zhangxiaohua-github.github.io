---
title: 'A Non-Local Fuzzy C-Means Clustering Segmentation Algorithm Based on Comentropy and Between-Cluster Scatter Matrix to Overcome the Inherent Coherence Speckles of SAR Images'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zhang Peng
  - Chen Yan
  - Chen Yunping

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2022-09-28T00:00:00Z'
doi: '10.1109/IGARSS46834.2022.9884294'

# Schedule page publish date (NOT publication's date).
publishDate: '2022-09-28T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 2022 IEEE International Geoscience and Remote Sensing Symposium IGARSS
publication_short: 2022 IGARSS

abstract: The fuzzy c-means (FCM) algorithm and many of its variations have been widely adopted for image segmentation tasks. However, these methods are unable to present satisfactory segmentation results when dealing with synthetic aperture radar (SAR) images owing to the intrinsic speckle noise. In order to achieve the effective segmentation of SAR images, a robust FCM algorithm, namely NCBS_FCM, is proposed. The nonlocal spatial information is utilized to reduce the effect of speckle noise. Furthermore, NCBS_FCM takes advantage of the comentropy based on local gray histogram to acquire the adaptive weighting parameter for nonlocal spatial information term, which can achieve a better balance between speckle suppression and edge detail preservation. In addition, this paper incorporates the between-cluster scatter term into the objective function to adjust the distance between the cluster centers accordingly. Therefore, NCBS_FCM is more robust to various images and achieves satisfactory segmentation accuracy. Experiments on simulated and real SAR images show that NCBS_FCM outperforms other proposed variations of FCM by a significant margin.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
#   - Filtering;Scattering;Geoscience and remote sensing;Filtering algorithms;Speckle;Image filtering;Polarimetric synthetic aperture radar;polarimetric synthetic aperture radar (PolSAR);filter;non-local means (NLM);polarization decomposition

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://ieeexplore.ieee.org/document/9884294'
# url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
