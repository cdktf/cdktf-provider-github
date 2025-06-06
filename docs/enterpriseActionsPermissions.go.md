# `enterpriseActionsPermissions` Submodule <a name="`enterpriseActionsPermissions` Submodule" id="@cdktf/provider-github.enterpriseActionsPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsPermissions <a name="EnterpriseActionsPermissions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.NewEnterpriseActionsPermissions(scope Construct, id *string, config EnterpriseActionsPermissionsConfig) EnterpriseActionsPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig">EnterpriseActionsPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig">EnterpriseActionsPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig">PutAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig">PutEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActions">ResetAllowedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActionsConfig">ResetAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetEnabledOrganizationsConfig">ResetEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedActionsConfig` <a name="PutAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig"></a>

```go
func PutAllowedActionsConfig(value EnterpriseActionsPermissionsAllowedActionsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---

##### `PutEnabledOrganizationsConfig` <a name="PutEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig"></a>

```go
func PutEnabledOrganizationsConfig(value EnterpriseActionsPermissionsEnabledOrganizationsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---

##### `ResetAllowedActions` <a name="ResetAllowedActions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActions"></a>

```go
func ResetAllowedActions()
```

##### `ResetAllowedActionsConfig` <a name="ResetAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActionsConfig"></a>

```go
func ResetAllowedActionsConfig()
```

##### `ResetEnabledOrganizationsConfig` <a name="ResetEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetEnabledOrganizationsConfig"></a>

```go
func ResetEnabledOrganizationsConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.EnterpriseActionsPermissions_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.EnterpriseActionsPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.EnterpriseActionsPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.EnterpriseActionsPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnterpriseActionsPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnterpriseActionsPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference">EnterpriseActionsPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfig">EnabledOrganizationsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference">EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfigInput">AllowedActionsConfigInput</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsInput">AllowedActionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfigInput">EnabledOrganizationsConfigInput</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsInput">EnabledOrganizationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActions">AllowedActions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizations">EnabledOrganizations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedActionsConfig`<sup>Required</sup> <a name="AllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfig"></a>

```go
func AllowedActionsConfig() EnterpriseActionsPermissionsAllowedActionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference">EnterpriseActionsPermissionsAllowedActionsConfigOutputReference</a>

---

##### `EnabledOrganizationsConfig`<sup>Required</sup> <a name="EnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfig"></a>

```go
func EnabledOrganizationsConfig() EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference">EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference</a>

---

##### `AllowedActionsConfigInput`<sup>Optional</sup> <a name="AllowedActionsConfigInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfigInput"></a>

```go
func AllowedActionsConfigInput() EnterpriseActionsPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---

##### `AllowedActionsInput`<sup>Optional</sup> <a name="AllowedActionsInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsInput"></a>

```go
func AllowedActionsInput() *string
```

- *Type:* *string

---

##### `EnabledOrganizationsConfigInput`<sup>Optional</sup> <a name="EnabledOrganizationsConfigInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfigInput"></a>

```go
func EnabledOrganizationsConfigInput() EnterpriseActionsPermissionsEnabledOrganizationsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---

##### `EnabledOrganizationsInput`<sup>Optional</sup> <a name="EnabledOrganizationsInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsInput"></a>

```go
func EnabledOrganizationsInput() *string
```

- *Type:* *string

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlugInput"></a>

```go
func EnterpriseSlugInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AllowedActions`<sup>Required</sup> <a name="AllowedActions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActions"></a>

```go
func AllowedActions() *string
```

- *Type:* *string

---

##### `EnabledOrganizations`<sup>Required</sup> <a name="EnabledOrganizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizations"></a>

```go
func EnabledOrganizations() *string
```

- *Type:* *string

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlug"></a>

```go
func EnterpriseSlug() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsPermissionsAllowedActionsConfig <a name="EnterpriseActionsPermissionsAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

&enterpriseactionspermissions.EnterpriseActionsPermissionsAllowedActionsConfig {
	GithubOwnedAllowed: interface{},
	PatternsAllowed: *[]*string,
	VerifiedAllowed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>interface{}</code> | Whether GitHub-owned actions are allowed in the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.patternsAllowed">PatternsAllowed</a></code> | <code>*[]*string</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>interface{}</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```go
GithubOwnedAllowed interface{}
```

- *Type:* interface{}

Whether GitHub-owned actions are allowed in the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#github_owned_allowed EnterpriseActionsPermissions#github_owned_allowed}

---

##### `PatternsAllowed`<sup>Optional</sup> <a name="PatternsAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```go
PatternsAllowed *[]*string
```

- *Type:* *[]*string

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#patterns_allowed EnterpriseActionsPermissions#patterns_allowed}

---

##### `VerifiedAllowed`<sup>Optional</sup> <a name="VerifiedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```go
VerifiedAllowed interface{}
```

- *Type:* interface{}

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#verified_allowed EnterpriseActionsPermissions#verified_allowed}

---

### EnterpriseActionsPermissionsConfig <a name="EnterpriseActionsPermissionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

&enterpriseactionspermissions.EnterpriseActionsPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnabledOrganizations: *string,
	EnterpriseSlug: *string,
	AllowedActions: *string,
	AllowedActionsConfig: github.com/cdktf/cdktf-provider-github-go/github/v15.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig,
	EnabledOrganizationsConfig: github.com/cdktf/cdktf-provider-github-go/github/v15.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizations">EnabledOrganizations</a></code> | <code>*string</code> | The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActions">AllowedActions</a></code> | <code>*string</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizationsConfig">EnabledOrganizationsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | enabled_organizations_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnabledOrganizations`<sup>Required</sup> <a name="EnabledOrganizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizations"></a>

```go
EnabledOrganizations *string
```

- *Type:* *string

The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enabled_organizations EnterpriseActionsPermissions#enabled_organizations}

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enterpriseSlug"></a>

```go
EnterpriseSlug *string
```

- *Type:* *string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enterprise_slug EnterpriseActionsPermissions#enterprise_slug}

---

##### `AllowedActions`<sup>Optional</sup> <a name="AllowedActions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActions"></a>

```go
AllowedActions *string
```

- *Type:* *string

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#allowed_actions EnterpriseActionsPermissions#allowed_actions}

---

##### `AllowedActionsConfig`<sup>Optional</sup> <a name="AllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActionsConfig"></a>

```go
AllowedActionsConfig EnterpriseActionsPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#allowed_actions_config EnterpriseActionsPermissions#allowed_actions_config}

---

##### `EnabledOrganizationsConfig`<sup>Optional</sup> <a name="EnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizationsConfig"></a>

```go
EnabledOrganizationsConfig EnterpriseActionsPermissionsEnabledOrganizationsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

enabled_organizations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#enabled_organizations_config EnterpriseActionsPermissions#enabled_organizations_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EnterpriseActionsPermissionsEnabledOrganizationsConfig <a name="EnterpriseActionsPermissionsEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

&enterpriseactionspermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig {
	OrganizationIds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.property.organizationIds">OrganizationIds</a></code> | <code>*[]*f64</code> | List of organization IDs to enable for GitHub Actions. |

---

##### `OrganizationIds`<sup>Required</sup> <a name="OrganizationIds" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.property.organizationIds"></a>

```go
OrganizationIds *[]*f64
```

- *Type:* *[]*f64

List of organization IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/enterprise_actions_permissions#organization_ids EnterpriseActionsPermissions#organization_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseActionsPermissionsAllowedActionsConfigOutputReference <a name="EnterpriseActionsPermissionsAllowedActionsConfigOutputReference" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.NewEnterpriseActionsPermissionsAllowedActionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnterpriseActionsPermissionsAllowedActionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">ResetPatternsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">ResetVerifiedAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPatternsAllowed` <a name="ResetPatternsAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```go
func ResetPatternsAllowed()
```

##### `ResetVerifiedAllowed` <a name="ResetVerifiedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```go
func ResetVerifiedAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">GithubOwnedAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">PatternsAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">VerifiedAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">PatternsAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GithubOwnedAllowedInput`<sup>Optional</sup> <a name="GithubOwnedAllowedInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```go
func GithubOwnedAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `PatternsAllowedInput`<sup>Optional</sup> <a name="PatternsAllowedInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```go
func PatternsAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifiedAllowedInput`<sup>Optional</sup> <a name="VerifiedAllowedInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```go
func VerifiedAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```go
func GithubOwnedAllowed() interface{}
```

- *Type:* interface{}

---

##### `PatternsAllowed`<sup>Required</sup> <a name="PatternsAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```go
func PatternsAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `VerifiedAllowed`<sup>Required</sup> <a name="VerifiedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```go
func VerifiedAllowed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EnterpriseActionsPermissionsAllowedActionsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---


### EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference <a name="EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionspermissions"

enterpriseactionspermissions.NewEnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIdsInput">OrganizationIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIds">OrganizationIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationIdsInput`<sup>Optional</sup> <a name="OrganizationIdsInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIdsInput"></a>

```go
func OrganizationIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `OrganizationIds`<sup>Required</sup> <a name="OrganizationIds" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIds"></a>

```go
func OrganizationIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EnterpriseActionsPermissionsEnabledOrganizationsConfig
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---



