# `actionsRunnerGroup` Submodule <a name="`actionsRunnerGroup` Submodule" id="@cdktf/provider-github.actionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRunnerGroup <a name="ActionsRunnerGroup" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group github_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsRunnerGroup(Construct Scope, string Id, ActionsRunnerGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories">ResetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows">ResetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows">ResetSelectedWorkflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowsPublicRepositories` <a name="ResetAllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```csharp
private void ResetAllowsPublicRepositories()
```

##### `ResetRestrictedToWorkflows` <a name="ResetRestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```csharp
private void ResetRestrictedToWorkflows()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

##### `ResetSelectedWorkflows` <a name="ResetSelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows"></a>

```csharp
private void ResetSelectedWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsRunnerGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsRunnerGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsRunnerGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsRunnerGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsRunnerGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited">Inherited</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl">RunnersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl">SelectedRepositoriesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput">AllowsPublicRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput">RestrictedToWorkflowsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput">SelectedWorkflowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited"></a>

```csharp
public IResolvable Inherited { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RunnersUrl`<sup>Required</sup> <a name="RunnersUrl" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl"></a>

```csharp
public string RunnersUrl { get; }
```

- *Type:* string

---

##### `SelectedRepositoriesUrl`<sup>Required</sup> <a name="SelectedRepositoriesUrl" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl"></a>

```csharp
public string SelectedRepositoriesUrl { get; }
```

- *Type:* string

---

##### `AllowsPublicRepositoriesInput`<sup>Optional</sup> <a name="AllowsPublicRepositoriesInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```csharp
public object AllowsPublicRepositoriesInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RestrictedToWorkflowsInput`<sup>Optional</sup> <a name="RestrictedToWorkflowsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```csharp
public object RestrictedToWorkflowsInput { get; }
```

- *Type:* object

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `SelectedWorkflowsInput`<sup>Optional</sup> <a name="SelectedWorkflowsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```csharp
public string[] SelectedWorkflowsInput { get; }
```

- *Type:* string[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `AllowsPublicRepositories`<sup>Required</sup> <a name="AllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories"></a>

```csharp
public object AllowsPublicRepositories { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RestrictedToWorkflows`<sup>Required</sup> <a name="RestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows"></a>

```csharp
public object RestrictedToWorkflows { get; }
```

- *Type:* object

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `SelectedWorkflows`<sup>Required</sup> <a name="SelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows"></a>

```csharp
public string[] SelectedWorkflows { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRunnerGroupConfig <a name="ActionsRunnerGroupConfig" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsRunnerGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Visibility,
    object AllowsPublicRepositories = null,
    object RestrictedToWorkflows = null,
    double[] SelectedRepositoryIds = null,
    string[] SelectedWorkflows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>object</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>object</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | List of repository IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>string[]</code> | List of workflows the runner group should be allowed to run. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#name ActionsRunnerGroup#name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#visibility ActionsRunnerGroup#visibility}

---

##### `AllowsPublicRepositories`<sup>Optional</sup> <a name="AllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```csharp
public object AllowsPublicRepositories { get; set; }
```

- *Type:* object

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#allows_public_repositories ActionsRunnerGroup#allows_public_repositories}

---

##### `RestrictedToWorkflows`<sup>Optional</sup> <a name="RestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```csharp
public object RestrictedToWorkflows { get; set; }
```

- *Type:* object

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

List of repository IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}

---

##### `SelectedWorkflows`<sup>Optional</sup> <a name="SelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```csharp
public string[] SelectedWorkflows { get; set; }
```

- *Type:* string[]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}

---



