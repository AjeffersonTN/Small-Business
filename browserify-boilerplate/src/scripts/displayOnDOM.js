let displayOnDom = (emNameFirst, emNameLast, emDepartment, emComputerMake, emComputerModel) => {
    return `
    <article class="employee">
        <header class="employee__name">
            <h1>${emNameFirst} ${emNameLast}</h1>
        </header>
        <section class="employee__department">
            Works in the ${emDepartment} department
        </section>
        <section class="employee__computer">
            Currently using a ${emComputerMake} ${emComputerModel}
        </section>
    </article>
    `
    console.log(name)

}

export default displayOnDom