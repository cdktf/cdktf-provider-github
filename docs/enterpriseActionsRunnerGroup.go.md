# `enterpriseActionsRunnerGroup` Submodule <a name="`enterpriseActionsRunnerGroup` Submodule" id="@cdktf/provider-github.enterpriseActionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsRunnerGroup <a name="EnterpriseActionsRunnerGroup" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/enterpriseactionsrunnergroup"

enterpriseactionsrunnergroup.NewEnterpriseActionsRunnerGroup(scope Construct, id *string, config EnterpriseActionsRunnerGroupConfig) EnterpriseActionsRunnerGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig">EnterpriseActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig">EnterpriseActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories">ResetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows">ResetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds">ResetSelectedOrganizationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows">ResetSelectedWorkflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowsPublicRepositories` <a name="ResetAllowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```go
func ResetAllowsPublicRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetRestrictedToWorkflows` <a name="ResetRestrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```go
func ResetRestrictedToWorkflows()
```

##### `ResetSelectedOrganizationIds` <a name="ResetSelectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds"></a>

```go
func ResetSelectedOrganizationIds()
```

##### `ResetSelectedWorkflows` <a name="ResetSelectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows"></a>

```go
func ResetSelectedWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/enterpriseactionsrunnergroup"

enterpriseactionsrunnergroup.EnterpriseActionsRunnerGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/enterpriseactionsrunnergroup"

enterpriseactionsrunnergroup.EnterpriseActionsRunnerGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/enterpriseactionsrunnergroup"

enterpriseactionsrunnergroup.EnterpriseActionsRunnerGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/enterpriseactionsrunnergroup"

enterpriseactionsrunnergroup.EnterpriseActionsRunnerGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnterpriseActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl">RunnersUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl">SelectedOrganizationsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput">AllowsPublicRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput">RestrictedToWorkflowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput">SelectedOrganizationIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput">SelectedWorkflowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds">SelectedOrganizationIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `RunnersUrl`<sup>Required</sup> <a name="RunnersUrl" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl"></a>

```go
func RunnersUrl() *string
```

- *Type:* *string

---

##### `SelectedOrganizationsUrl`<sup>Required</sup> <a name="SelectedOrganizationsUrl" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl"></a>

```go
func SelectedOrganizationsUrl() *string
```

- *Type:* *string

---

##### `AllowsPublicRepositoriesInput`<sup>Optional</sup> <a name="AllowsPublicRepositoriesInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```go
func AllowsPublicRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput"></a>

```go
func EnterpriseSlugInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RestrictedToWorkflowsInput`<sup>Optional</sup> <a name="RestrictedToWorkflowsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```go
func RestrictedToWorkflowsInput() interface{}
```

- *Type:* interface{}

---

##### `SelectedOrganizationIdsInput`<sup>Optional</sup> <a name="SelectedOrganizationIdsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput"></a>

```go
func SelectedOrganizationIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SelectedWorkflowsInput`<sup>Optional</sup> <a name="SelectedWorkflowsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```go
func SelectedWorkflowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `AllowsPublicRepositories`<sup>Required</sup> <a name="AllowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories"></a>

```go
func AllowsPublicRepositories() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug"></a>

```go
func EnterpriseSlug() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RestrictedToWorkflows`<sup>Required</sup> <a name="RestrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows"></a>

```go
func RestrictedToWorkflows() interface{}
```

- *Type:* interface{}

---

##### `SelectedOrganizationIds`<sup>Required</sup> <a name="SelectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds"></a>

```go
func SelectedOrganizationIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `SelectedWorkflows`<sup>Required</sup> <a name="SelectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows"></a>

```go
func SelectedWorkflows() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsRunnerGroupConfig <a name="EnterpriseActionsRunnerGroupConfig" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/enterpriseactionsrunnergroup"

&enterpriseactionsrunnergroup.EnterpriseActionsRunnerGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnterpriseSlug: *string,
	Name: *string,
	Visibility: *string,
	AllowsPublicRepositories: interface{},
	Id: *string,
	RestrictedToWorkflows: interface{},
	SelectedOrganizationIds: *[]*f64,
	SelectedWorkflows: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility">Visibility</a></code> | <code>*string</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>interface{}</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>interface{}</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds">SelectedOrganizationIds</a></code> | <code>*[]*f64</code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>*[]*string</code> | List of workflows the runner group should be allowed to run. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug"></a>

```go
EnterpriseSlug *string
```

- *Type:* *string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `AllowsPublicRepositories`<sup>Optional</sup> <a name="AllowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```go
AllowsPublicRepositories interface{}
```

- *Type:* interface{}

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RestrictedToWorkflows`<sup>Optional</sup> <a name="RestrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```go
RestrictedToWorkflows interface{}
```

- *Type:* interface{}

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `SelectedOrganizationIds`<sup>Optional</sup> <a name="SelectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds"></a>

```go
SelectedOrganizationIds *[]*f64
```

- *Type:* *[]*f64

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `SelectedWorkflows`<sup>Optional</sup> <a name="SelectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```go
SelectedWorkflows *[]*string
```

- *Type:* *[]*string

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---



