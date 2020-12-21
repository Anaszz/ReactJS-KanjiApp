import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Pagination from './pagination'
import GameChoice from './components/gameChoice'
import KanjiChoice from './components/kanji/kanjiChoice'
import KanjiGame from './components/kanji/kanjigame'
import AllwordsChoice from './components/allwords/allwordsChoice'
import AllwordsGame from './components/allwords/allwordsgame'



function MyRouter(){

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Pagination} />
                <Route exact path="/game" component={GameChoice} />
                <Route exact path="/game/kanji" component={KanjiChoice} />
                <Route exact path="/game/kanji/:id" component={KanjiGame} />
                <Route exact path="/game/translate" component={AllwordsChoice} />
                <Route exact path="/game/translate/:id" component={AllwordsGame} />
            </Switch>
        </Router>

        
    )
}

export default MyRouter