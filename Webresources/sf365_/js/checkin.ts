﻿/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
namespace sf365.checkin
{

    class CheckInViewModel
    {
        isBusy: KnockoutObservable<boolean>;

        constructor() {
            this.isBusy = ko.observable(false);
        }

        public foo() {
            // adding some comments
            alert("foo");
        }




    }


}