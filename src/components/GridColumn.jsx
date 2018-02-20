import React, {Component} from 'react';

export class GridColumn extends Component {
  render() {
    return (
      <div className="grid-column">
        <form id="form-1">
          <div>
            <input type="checkbox" id="checkbox-1" name="checkbox-1" value="checkbox-1" /><label htmlFor="checkbox-1"></label>
            <input type="checkbox" id="checkbox-2" name="checkbox-2" value="checkbox-2" /><label htmlFor="checkbox-2"></label>
            <input type="checkbox" id="checkbox-3" name="checkbox-3" value="checkbox-3" /><label htmlFor="checkbox-3"></label>
            <input type="checkbox" id="checkbox-4" name="checkbox-4" value="checkbox-4" /><label htmlFor="checkbox-4"></label>
            <input type="checkbox" id="checkbox-5" name="checkbox-5" value="checkbox-5" /><label htmlFor="checkbox-5"></label>
            <input type="checkbox" id="checkbox-6" name="checkbox-6" value="checkbox-6" /><label htmlFor="checkbox-6"></label>
            <input type="checkbox" id="checkbox-7" name="checkbox-7" value="checkbox-7" /><label htmlFor="checkbox-7"></label>
            <input type="checkbox" id="checkbox-8" name="checkbox-8" value="checkbox-8" /><label htmlFor="checkbox-8"></label>
            <input type="checkbox" id="checkbox-9" name="checkbox-9" value="checkbox-9" /><label htmlFor="checkbox-9"></label>
            <input type="checkbox" id="checkbox-10" name="checkbox-10" value="checkbox-10" /><label htmlFor="checkbox-10"></label>
          </div>
          <div>
            <input type="submit" value="save" form_id="form-1" />
          </div>
        </form>
      </div>
    );
  }
}

export default GridColumn;