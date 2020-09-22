import {ReactNode} from "react";

export default function TwoCol({children, label, mobileLabel, className, id}:
    {
        children: ReactNode,
        label: string | ReactNode,
        mobileLabel?: boolean,
        className?: string,
        id?: string,
    }
) {
    return (
        <div className={`lg:flex lcl-container ${className}`} id={id}>
            <div className="lg:w-24 flex-shrink-0">
                <div className={`${mobileLabel ? "mb-8 lg:mb-0" : "hidden lg:block"}`}>
                    {label === "logo" ? (
                        <img src="/logo-new-white.svg" className="h-8" alt="LCL Logo"/>
                    ) : (
                        <span className="lcl-bold-uppercase leading-none">{label}</span>
                    )}
                </div>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    )
}