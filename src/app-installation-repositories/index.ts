/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/app_installation_repositories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppInstallationRepositoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/app_installation_repositories#id AppInstallationRepositories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub app installation id.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/app_installation_repositories#installation_id AppInstallationRepositories#installation_id}
  */
  readonly installationId: string;
  /**
  * A list of repository names to install the app on.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/app_installation_repositories#selected_repositories AppInstallationRepositories#selected_repositories}
  */
  readonly selectedRepositories: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/app_installation_repositories github_app_installation_repositories}
*/
export class AppInstallationRepositories extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_app_installation_repositories";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/app_installation_repositories github_app_installation_repositories} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppInstallationRepositoriesConfig
  */
  public constructor(scope: Construct, id: string, config: AppInstallationRepositoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_app_installation_repositories',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.27.0',
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
    this._installationId = config.installationId;
    this._selectedRepositories = config.selectedRepositories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // installation_id - computed: false, optional: false, required: true
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }

  // selected_repositories - computed: false, optional: false, required: true
  private _selectedRepositories?: string[]; 
  public get selectedRepositories() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_repositories'));
  }
  public set selectedRepositories(value: string[]) {
    this._selectedRepositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoriesInput() {
    return this._selectedRepositories;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      installation_id: cdktf.stringToTerraform(this._installationId),
      selected_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedRepositories),
    };
  }
}
