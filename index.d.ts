declare namespace conversionRadix {
    function conversionDecimal (originBase: number, value: string): string;
    function conversionDecimalToAny (base: number, value: string): string;
    function conversionRadix (originBase: number, targetBase: number, value: string): string;
}

export as namespace conversionRadix;

export = conversionRadix;