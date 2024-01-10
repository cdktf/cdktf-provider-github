/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryDependabotSecurityUpdatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The state of the automated security fixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates#enabled RepositoryDependabotSecurityUpdates#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates#repository RepositoryDependabotSecurityUpdates#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates github_repository_dependabot_security_updates}
*/
export class RepositoryDependabotSecurityUpdates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_dependabot_security_updates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryDependabotSecurityUpdates to import
  * @param importFromId The id of the existing RepositoryDependabotSecurityUpdates that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryDependabotSecurityUpdates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_dependabot_security_updates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/repository_dependabot_security_updates github_repository_dependabot_security_updates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryDependabotSecurityUpdatesConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryDependabotSecurityUpdatesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_dependabot_security_updates',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.43.0',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
