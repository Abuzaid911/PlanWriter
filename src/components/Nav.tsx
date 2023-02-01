/* eslint-disable @typescript-eslint/no-misused-promises */
import { useSession, signIn, signOut } from "next-auth/react"

function Nav() {
    const session = useSession();

    return (

        <nav>
            <div className="navbar bg-[#e7f3f0]">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-[#0f4551]">Treatment Plan Writer AI</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        {session.status == "loading" && <button className="btn btn-square bg-green-200 loading"></button>}
                        {session.status == "unauthenticated" && (<>
                            <button className="btn btn-ghost btn-circle text-[#0f4551] " onClick={() => signIn("google")}>login</button>
                        </>)}
                        {session.status == "authenticated" && session.data.user?.image && <div className="indicator">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={session.data.user?.image} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#e7f3f0] rounded-box w-52">
                                    <li onClick={() => signOut()}><a className="text-[#0f4551]">Logout</a></li>
                                </ul>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Nav;