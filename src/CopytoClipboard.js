const CopyToClipBoard = (e, ref) => {
  ref.current.select();
  document.execCommand("copy");
  e.target.focus();
  alert("OK");
};

export default CopyToClipBoard;
