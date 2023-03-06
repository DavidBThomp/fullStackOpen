const Personform = ({formOnSubmit, nameValue, nameChange, phoneValue, phoneChange}) => {
    return (
        <form onSubmit={formOnSubmit}>
        <div>
          name: <input value={nameValue} onChange={nameChange}/>
        </div>
        <div>
          Phone Number: <input type={'tel'} value={phoneValue} onChange={phoneChange} />
          </div>
        <div>
          <button>add</button>
        </div>
      </form>
    )
}

export default Personform