import React from 'react'
import PropTypes from 'prop-types';

function Alert(props) {
        const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
      {props.alert && (
      <div class={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.ty)}</strong>:{props.alert.msg}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>)}



    </div>
  )
}

export default Alert
