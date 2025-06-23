---
title: 'A Filtering Algorithm Based on Polarization Decomposition for Better Preserving Polsar Image Scattering Features'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zhang Peng
  - Chen Yan
  - Chen Yunping
  - Lu Youchun
  - Xu Chunliang

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2022-10-05T00:00:00Z'
doi: '10.1109/IGARSS47720.2021.9553607'

# Schedule page publish date (NOT publication's date).
publishDate: '2022-10-05T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 2021 IEEE International Geoscience and Remote Sensing Symposium IGARSS
publication_short: 2021 IGARSS

abstract: The polarimetric synthetic aperture radar (PolSAR) image filtering is an essential step before the quantitative inversion. However, the existing filtering algorithms often change the scattering features of the original PolSAR images. This leads to a performance decrease for the subsequent quantitative inversion. In order to combat such drawback, we adopted a novel filtering algorithm preceding the quantitative inversion. This algorithm adopted the idea of “classify first, filter later”. By utilizing the hybrid four-component polarization decomposition (HPD) method to pre-classify the pixels, and implementing non-local means lee (NLM-Lee) filtering only between the same ground object points, the scattering features are well-protected. The experiment results show that the proposed algorithm can not only effectively reduce the speckle and preserve the structural features of the image, but is far superior in preserving the scattering features of the images. Hence, when the PolSAR image filtering is carried out by the proposed algorithm, the performance of the quantitative inversion will be improved.

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

url_pdf: 'https://ieeexplore.ieee.org/document/9553607'
# url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

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
