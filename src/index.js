/**
 * TODO LIST
 * @type {Todo[]}
 */

const todos = [];

/**
 * TODO
 * @typedef {Object} Todo
 * @property {string} id - 아이디(required),
 * @property {string} content -내용(required),
 * @property {boolean} isFinished - 완료여부(required),
 * @property {string} category - 카테고리(required),
 * @property {array} tags - 태그들(optional),
 */

/** @function addTodo
 * @description TODO 추가 함수
 * @todo 할 일을 추가할 수 있다.
 * @todo 내용없이 추가할 수 없다.
 */
function addTodo() {}

/** @function getTodos
 * @description TODO List 조회 함수
 * @param {string} id - 조회할 TODO id
 * @todo  모든 할 일을 조회할 수 있다.
 * @todo  ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
function getTodos() {}

/** @function updateTodo
 * @description TODO 수정 함수
 * @param {string} id - 수정할 TODO id
 * @todo ID를 제외한 모든 속성을 수정할 수 있다.
 * @todo 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTodo() {}

/** @function deleteTodo
 * @description TODO 삭제 함수
 * @param {string} id - 삭제할 TODO id
 * @todo ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @todo 모든 할 일을 제거할 수 있다.
 * @todo 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @todo 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTodos() {}
