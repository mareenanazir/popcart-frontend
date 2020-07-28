import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"

import { ToastContainer, toast } from 'react-toastify';
import { CopyToClipboard as ReactCopyToClipboard} from "react-copy-to-clipboard"

import { Button } from "../button"
import { COPIED_TO_CLIPBOARD } from "../../utils/values"

export const CopyToClipboard = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <Fragment>
      <ReactCopyToClipboard text={text} onCopy={() => {setIsCopied(true); toast(COPIED_TO_CLIPBOARD)}}>
        <Button className="shop-now">Share with friend</Button>
      </ReactCopyToClipboard>
      {isCopied && <ToastContainer/>}
    </Fragment>
  )
}

CopyToClipboard.propTypes = {
  text: PropTypes.string,
}
