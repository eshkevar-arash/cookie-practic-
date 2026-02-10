

/*const Toast = Swal.mixin({
    showClass: {
        popup: `
                      animate__animated
                      animate__fadeInDown
                      animate__faster
                    `
    },
    hideClass: {
        popup: `
                      animate__animated
                      animate__fadeOutRight
                      animate__faster
                    `
    },
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
function showMessage(msg,icon){
    Swal.fire({
        title: msg,
        icon: icon
    })
}
function convertToPersianNumber(number) {
    return number.toString().replace(/\d/g, function(d) {
        return '۰۱۲۳۴۵۶۷۸۹'[d];
    });
}
btn.addEventListener('click', ()=> {
    Swal.fire({
        title: 'لطفا مقداری وارد کنید',
        input: 'text',
        inputPlaceholder: 'اینجا تایپ کنید...',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            if (!result.value){
                showError('ورودی خالی است')
                return
            }
            if (isNaN(Number(result.value))){
                showError('ورودی غیر صحیح است')
                return;
            }
            Toast.fire({
              title: 'saved',
              icon: 'success',
              didClose: () => {
                console.log('✅ Toast بسته شد');
              }
            });
        }
    });
})*/

const Toast = Swal.mixin({
    showClass: {
        popup: `
                      animate__animated
                      animate__fadeInDown
                      animate__faster
                    `
    },
    hideClass: {
        popup: `
                      animate__animated
                      animate__fadeOutRight
                      animate__faster
                    `
    },
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
function showMessage(msg,icon){
    Swal.fire({
        title: msg,
        icon: icon
    })
}


const CookieManager = {
    // ساختن یا آپدیت کوکی
    set: function(name, value, days) {
        let expires = ""
        if (days) {
            const date = new Date()
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
            expires = "expires=" + date.toUTCString()
        }
        document.cookie = name + "=" + value + "; path=/; " + expires
    },

    // خوندن کوکی
    get: function(name) {
        const nameEQ = name + "="
        const ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim()
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
        }
        return null
    },

    // حذف کوکی
    delete: function(name) {
        document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}


/*const cookieButton = document.querySelector('#cookie-btn')
const deleteCookieButton = document.querySelector('#delete-cookie-btn')

cookieButton.addEventListener('click', () => {
    CookieManager.set('family', 'vakily', 2)
    CookieManager.set('familyX', 'vakilyx', 2)
})
deleteCookieButton.addEventListener('click', () => {
    CookieManager.delete('username')
})*/













