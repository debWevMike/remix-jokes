export default function JokesNew() {
  return (
    <form>
      <h1>Add new joke here</h1>
      <label>Name: </label>
      <input type="text" id="jokeName" />
      <br />
      <label>Content: </label>
      <input type="text" id="content" />
      <br />
      <input type="submit" value="Add" />
      <br />
    </form>
  )
}
