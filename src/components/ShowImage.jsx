export function ShowImage({ handleImage }) {

  return (
    handleImage && (
      <div className="is-flex is-justify-content-center mt-4 mb-5 is-flex-direction-column is-align-items-center">
      <p className="mb-3">Foto a ser enviada:</p>
      <div className="img-container">
        <img src={handleImage} alt="" />
      </div>
    </div>
    )
  )
}