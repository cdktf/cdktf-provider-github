/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.38.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/data-sources/user#id DataGithubUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/data-sources/user#username DataGithubUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/data-sources/user github_user}
*/
export class DataGithubUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/data-sources/user github_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubUserConfig) {
    super(scope, id, {
      terraformResourceType: 'github_user',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.38.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // bio - computed: true, optional: false, required: false
  public get bio() {
    return this.getStringAttribute('bio');
  }

  // blog - computed: true, optional: false, required: false
  public get blog() {
    return this.getStringAttribute('blog');
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // followers - computed: true, optional: false, required: false
  public get followers() {
    return this.getNumberAttribute('followers');
  }

  // following - computed: true, optional: false, required: false
  public get following() {
    return this.getNumberAttribute('following');
  }

  // gpg_keys - computed: true, optional: false, required: false
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }

  // gravatar_id - computed: true, optional: false, required: false
  public get gravatarId() {
    return this.getStringAttribute('gravatar_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // public_gists - computed: true, optional: false, required: false
  public get publicGists() {
    return this.getNumberAttribute('public_gists');
  }

  // public_repos - computed: true, optional: false, required: false
  public get publicRepos() {
    return this.getNumberAttribute('public_repos');
  }

  // site_admin - computed: true, optional: false, required: false
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin');
  }

  // ssh_keys - computed: true, optional: false, required: false
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }

  // suspended_at - computed: true, optional: false, required: false
  public get suspendedAt() {
    return this.getStringAttribute('suspended_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
