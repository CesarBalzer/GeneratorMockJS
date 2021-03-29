const genMock = async (qtde_cat, qtde_sub) => {
  const cats = await genCategory(qtde_cat);
  // console.log(
  //   "------------------------CATEGORIES--------------------------------"
  // );
  // console.log(cats)
  // console.log(cats.join(","));
  // console.log(
  //   "------------------------END CATEGORIES--------------------------------"
  // );

  const subs = await genSubCategory(qtde_cat, qtde_sub);
  // console.log(
  //   "------------------------SUB CATEGORIES--------------------------------"
  // );
  // console.log(subs)
  // console.log(subs.join(","));
  // console.log(
  //   "------------------------END SUB CATEGORIES--------------------------------"
  // );

  const prods = await genProduct(qtde_cat, subs.length);
  // console.log(
  //   "------------------------PRODUCTS--------------------------------"
  // );
  // console.log(prods)
  // console.log(prods.join(","));
  // console.log(
  //   "------------------------END PRODUCTS--------------------------------"
  // );

  return { cats, subs, prods };
};

/**
 *  Generate categories
 * @param {int} qtde_cat Number of categories for generate
 * @param {int} qtde_sub Number of sub-categories for generate
 */
const genCategory = async (qtde_cat) => {
  let cats = [];
  for (let i = 1; i <= qtde_cat; i++) {
    cats.push(
      `{ id_category: ${i}, title:'Category test ${i}', description: 'Description of category test ${i}', active:true }`
    );
  }

  return cats;
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
  let subs = [];
  for (let i = ini; i <= fim; i++) {
    //Generate object
    // subs.push({ id_subcategory: i, name: `Subcategory test ${i}`, description: `Description of subcategory test ${i}`, active: true, category: id_category });

    //Generate string
    subs.push(
      `{ id_subcategory: ${i}, name:'Subcategory test ${i}', description: 'Description of subcategory test ${i}', active:true, category:${id_category} }`
    );

    if (i % qtde === 0) {
      id_category++;
    }
  }
  return subs;
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
  let prods = [];

  for (let i = ini; i <= fim; i++) {
    //Generate object
    // prods.push({ id_product: i, name: `Product test ${i}`, description: `Description of product test ${i}`, image: ``, price: `R$ 18,99`, active: true, category: id_category, subcategory: id_subcategory });

    //Generate string
    prods.push(
      `{ id_product: ${i}, name:'Product test ${i}', description: 'Description of product test ${i}', image:'', price:'R$ 18,99', active:true, category:${id_category}, subcategory:${id_subcategory} }`
    );

    if (i % subs === 0) {
      id_subcategory++;
    }
    if (i % cats === 0) {
      id_category++;
      id_subcategory = 1;
    }
  }
  return prods;
};

export default genMock;
