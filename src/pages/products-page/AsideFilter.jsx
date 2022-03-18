export default function AsideFilter() {
  return (
    <aside className="ha-aside">
      <div className="aside-top-heading">
        <h3>Filter</h3>
        <h3>Clear</h3>
      </div>
      <h3>Price</h3>
      <div className="slider-container">
        <div className="label-container">
          <label for="50">50</label>
          <label for="100">100</label>
          <label for="150">150</label> <br />
        </div>

        <input type="range" min="1" max="100" />
      </div>

      <div className="h-aside-categ">
        <h3>Category</h3>
      </div>

      <form action="check">
        <input type="checkbox" name="category1" id="category1" value="men" />
        <label for="category1">Men</label>
        <br />
        <input type="checkbox" name="category2" id="category2" value="women" />
        <label for="category2">Women</label>
        <br />
        <input type="checkbox" name="category3" id="category3" value="kids" />
        <label for="category3">Kids</label>
        <br />
        <input type="checkbox" name="category4" id="category4" value="indie" />
        <label for="category4">Inide</label>
        <br />
      </form>

      <div className="rating">
        <h3>Rating</h3>

        <form action="radio">
          <input
            type="radio"
            id="4 Stars & above"
            value="4 Stars & above"
            name="h-radio"
          />
          <label for="4 Stars & above">4 Stars & above</label>
          <br />
          <input
            type="radio"
            id="3 Stars & above"
            value="3 Stars & above"
            name="h-radio"
          />
          <label for="3 Stars & above">3 Stars & above</label>
          <br />
          <input
            type="radio"
            id="2 Stars & above"
            value="2 Stars & above"
            name="h-radio"
          />
          <label for="2 Stars & above">2 Stars & above</label>
          <br />
          <input
            type="radio"
            id="1 Stars & above"
            value="4 Stars & above"
            name="h-radio"
          />
          <label for="1 Stars & above">1 Stars & above</label>
          <br />
        </form>
      </div>

      <div className="sorting">
        <h3>Sort By</h3>
        <form action="radio">
          <input
            type="radio"
            id="price value"
            value="Price - Low to High"
            name="h-radio"
          />
          <label for="Price - Low to High">Price - Low to High</label>
          <br />
          <input
            type="radio"
            id="price value"
            value="Price - High to Low"
            name="h-radio"
          />
          <label for="Price - High to Low">Price - High to Low</label>
          <br />
        </form>
      </div>
    </aside>
  );
}
