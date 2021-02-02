// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <div style={{ minHeight: '80vh' }}>
      <Router>
        <Route path="/position-descriptions/new" page={NewPositionDescriptionPage} name="newPositionDescription" />
        <Route path="/position-descriptions/{id:Int}/edit" page={EditPositionDescriptionPage} name="editPositionDescription" />
        <Route path="/position-descriptions/{id:Int}" page={PositionDescriptionPage} name="positionDescription" />
        <Route path="/position-descriptions" page={PositionDescriptionsPage} name="positionDescriptions" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Router>
    </div>
  )
}

export default Routes
