const genMock = async (qtde_cat, qtde_sub) => {
  const cats = await genCategory(qtde_cat);
  const subs = await genSubCategory(qtde_cat, qtde_sub);
  const prods = await genProduct(qtde_cat, subs.objects.length);

  return { cats, subs, prods };
};

/**
 *  Generate categories
 * @param {int} qtde_cat Number of categories for generate
 * @param {int} qtde_sub Number of sub-categories for generate
 */
const genCategory = async (qtde_cat) => {
  let strings = [];
  let objects = [];
  for (let i = 1; i <= qtde_cat; i++) {
    strings.push(
      `{ id_category: ${i}, title:'Category test ${i}', description: 'Description of category test ${i}', active:true }`
    );
    objects.push({
      id_category: i,
      title: `Category test ${i}`,
      description: `Description of category test ${i}`,
      active: true
    });
  }

  return { strings, objects };
};
/**
 * Generate sub-categories
 * @param {int} categories Number of categories
 * @param {int} qtde Number of sub-categories that will be generated for each category
 */
const genSubCategory = async (categories, qtde) => {
  let id_category = 1;
  let ini = 1;
  let fim = categories * qtde;
  let strings = [];
  let objects = [];
  for (let i = ini; i <= fim; i++) {
    //Generate string
    strings.push(
      `{ id_subcategory: ${i}, name:'Subcategory test ${i}', description: 'Description of subcategory test ${i}', active:true, category:${id_category} }`
    );

    //Generate object
    objects.push({
      id_subcategory: i,
      name: `Subcategory test ${i}`,
      description: `Description of subcategory test ${i}`,
      active: true,
      category: id_category
    });

    if (i % qtde === 0) {
      id_category++;
    }
  }
  return { strings, objects };
};

/**
 * Generate products
 * @param {int} subs Number of sub-categories
 * @param {*} cats Number of categories
 * @returns
 */
const genProduct = async (subs, cats) => {
  let id_category = 1;
  let id_subcategory = 1;
  let ini = 1;
  let fim = cats * subs;
  let strings = [];
  let objects = [];

  for (let i = ini; i <= fim; i++) {
    //Generate string
    strings.push(
      `{ id_product: ${i}, name:'Product test ${i}', description: 'Description of product test ${i}', image:'', price:'R$ 18,99', active:true, category:${id_category}, subcategory:${id_subcategory} }`
    );

    //Generate object
    objects.push({
      id_product: i,
      name: `Product test ${i}`,
      description: `Description of product test ${i}`,
      image: ``,
      price: `R$ 18,99`,
      active: true,
      category: id_category,
      subcategory: id_subcategory
    });

    if (i % subs === 0) {
      id_subcategory++;
    }
    if (i % cats === 0) {
      id_category++;
      id_subcategory = 1;
    }
  }
  return { strings, objects };
};

export default genMock;
