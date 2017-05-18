import React from 'react';
import { Link } from 'react-router';

const NewPlaylist = (props) => {
  console.log(props.tooLong, props.tooShort)
  return (
<div className="well">
  <form className="form-horizontal" onSubmit={props.handleSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input type="text" value={props.inputValue} onChange={props.handleChange} className="form-control"  />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
        {props.show && props.tooLong ? <div className="alert alert-warning">Your playlist name is too long</div> : null}
        {props.show && props.tooShort ? <div className="alert alert-warning">Please enter a name</div> : null}
          <button
          disabled={props.inputValue === "" || props.inputValue.length > 16 ? true : false}
          type="submit" className="btn btn-success">
          Create Playlist
          </button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)}

export default NewPlaylist;
